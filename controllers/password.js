const { User } = require('../models');
const { check, validationResult } = require('express-validator/check');
const { generateFormErrors } = require('../helpers/validation');
const { oneHourFromNow, timeDiffFromNow } = require('../helpers/date');
const { verifyToken } = require('../helpers/auth');

exports.sendResetLink = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('The email field is required.')
        .isEmail()
        .withMessage('The email must be a valid email address.'),
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
            return res.status(422).json({
                email: 'There is no user registered with the provided email address.',
            });
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
];

exports.reset = [
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
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = generateFormErrors(errors.array());

            return res.status(422).json(err);
        }

        if (!req.body.token) {
            return res.status(401).end();
        }

        try {
            var payload = verifyToken(req.body.token);
        } catch (err) {
            return res.status(401).end();
        }

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

            //Logout from all devices
            await user.logout(req, res, true);

            res.status(200).end();
        } catch (error) {
            return res.status(500).end();
        }
    },
];
