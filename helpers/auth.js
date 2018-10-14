const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: token => jwt.verify(token, process.env.JWT_SECRET),
};
