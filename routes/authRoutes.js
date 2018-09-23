const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { check, validationResult } = require('express-validator/check');
const { generateFormErrors } = require('../helpers/validation');
const { oneHourFromNow, timeDiffFromNow } = require('../helpers/date');
const { verifyToken } = require('../helpers/auth');

router.post(
    '/password/email',
    [
        check('email')
            .exists({ checkFalsy: true })
            .withMessage('The email field is required.')
            .isEmail()
            .withMessage('The email must be a valid email address.'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(generateFormErrors(errors.array()));
        }

        const user = await User.query()
            .select('id', 'email')
            .where('email', req.body.email)
            .first();

        if (!user) {
            return res.status(422).json({ email: 'There is no user registered with the provided email address.' });
        }

        const token = user.generateToken(oneHourFromNow());

        try {
            await user.$query().patch({
                reset_token: token,
            });
            res.status(200).end();
        } catch (error) {
            res.status(401).end();
        }
    },
);

router.post(
    '/password/reset',
    [
        check('password')
            .exists({ checkFalsy: true })
            .withMessage('The password field is required.')
            .isLength({ min: 6 })
            .withMessage('The password must have at least 6 characters.'),
        check('password_confirmation')
            .exists({ checkFalsy: true })
            .withMessage('The password confirmation field is required.')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('The password confirmation does not match password');
                } else {
                    return true;
                }
            }),
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = generateFormErrors(errors.array());

            return res.status(422).json(err);
        }

        if (!req.body.token) {
            return res.status(401).end();
        }

        const payload = verifyToken(req.body.token);

        if (!payload) {
            return res.status(401).end();
        }

        const timeDiff = timeDiffFromNow(payload.expiresAt);
        if (+timeDiff.minutes <= 0) {
            return res.status(401).end();
        }

        const user = await User.query()
            .select('id')
            .where('id', payload.id)
            .first();

        if (!user) {
            return res.status(401).end();
        }

        try {
            const password = await user.generatePasswordHash(req.body.password);

            await user.$query().patch({
                password: password,
                reset_token: null,
            });

            res.status(200).end();
        } catch (error) {
            console.log(error);
            return res.status(500).end();
        }
    },
);

router.get('/user', (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.status(401).end();
    }
});

router.post('/logout', async (req, res) => {
    if (req.user) {
        const user = await User.query()
            .select('id', 'login_tokens')
            .where('id', req.user.id)
            .first();

        await user.logout(req, res);

        res.status(200).end();
    } else {
        res.status(401).end();
    }
});

router.post(
    '/login',
    [
        check('email')
            .exists({ checkFalsy: true })
            .withMessage('The email field is required.')
            .isEmail()
            .withMessage('The email must be a valid email address.'),
        check('password')
            .exists({ checkFalsy: true })
            .withMessage('The password field is required.'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(generateFormErrors(errors.array()));
        }
        if (req.user) {
            res.json(req.user);
        } else {
            const user = await User.query()
                .context({ withPassword: true })
                .select('id', 'name', 'email', 'password', 'login_tokens')
                .where('email', req.body.email)
                .first();

            if (!user) {
                res.status(422).json({ email: 'These credentials do not match our records.' });
            }

            const validPassword = await user.authenticate(req.body.password);

            if (!validPassword) {
                res.status(422).json({ email: 'These credentials do not match our records.' });
            } else {
                await user.login(req, res, req.body.remember);

                delete user.password;
                res.json(user);
            }
        }
    },
);

router.post(
    '/register',
    [
        check('name')
            .exists({ checkFalsy: true })
            .withMessage('The name field is required.'),
        check('email')
            .exists({ checkFalsy: true })
            .withMessage('The email field is required.')
            .isEmail()
            .withMessage('The email must be a valid email address.'),
        check('password')
            .exists({ checkFalsy: true })
            .withMessage('The password field is required.')
            .isLength({ min: 6 })
            .withMessage('The password must have at least 6 characters.'),
        check('password_confirmation')
            .exists({ checkFalsy: true })
            .withMessage('The password confirmation field is required.')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('The password confirmation does not match password');
                } else {
                    return true;
                }
            }),
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = generateFormErrors(errors.array());

            if (!err.hasOwnProperty('email')) {
                const count = await User.isEmailUnique(req.body.email);
                if (count[0].id) {
                    err['email'] = 'email already exists';
                }
            }

            return res.status(422).json(err);
        }

        try {
            let user = await User.query().insert(req.body);

            await user.login(req, res);

            delete user.password_confirmation;
            res.json(user);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                res.status(422).json({ email: 'email already exists' });
            } else {
                res.status(422).json(error);
            }
        }
    },
);

module.exports = router;
