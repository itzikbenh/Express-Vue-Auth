const { User } = require('../models');
const { check, validationResult } = require('express-validator/check');
const { generateFormErrors } = require('../helpers/validation');

exports.create = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('The email field is required.')
        .isEmail()
        .withMessage('The email must be a valid email address.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('The password field is required.'),
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
                return res.status(422).json({
                    email: 'These credentials do not match our records.',
                });
            }

            const validPassword = await user.authenticate(req.body.password);

            if (!validPassword) {
                res.status(422).json({
                    email: 'These credentials do not match our records.',
                });
            } else {
                await user.login(req, res, req.body.remember);

                delete user.password;
                res.json(user);
            }
        }
    },
];

exports.delete = async (req, res) => {
    if (req.user) {
        await req.user.logout(req, res);

        res.status(200).end();
    } else {
        res.status(401).end();
    }
};

exports.deleteAll = async (req, res) => {
    if (req.user) {
        await req.user.logout(req, res, true);

        res.status(200).end();
    } else {
        res.status(401).end();
    }
};
