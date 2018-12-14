const { User } = require('../models');
const { timeDiffFromNow } = require('../helpers/date');
const { verifyToken } = require('../helpers/auth');

module.exports = async (req, res, next) => {
    const token = req.cookies.user_login;

    if (!token) {
        return next();
    }

    try {
        var payload = verifyToken(token);
    } catch (err) {
        return next();
    }

    if (!payload) {
        return next();
    }

    const user = await User.query()
        .select('id', 'login_tokens', 'name', 'email')
        .where('id', payload.id)
        .first();

    if (user && user.login_tokens.length) {
        const login_token = user.login_tokens.filter(lt => lt.token === token);

        if (login_token.length) {
            req.login_token = login_token[0].token;
            const timeDiff = timeDiffFromNow(payload.expiresAt);
            if (+timeDiff.days >= 0 && +timeDiff.hours >= 0) {
                req.user = user;
                return next();
            }
            //JWT expired
            await user.logout(req, res);
        }
    }

    next();
};
