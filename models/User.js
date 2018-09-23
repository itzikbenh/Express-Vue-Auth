const { Model } = require('objection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { oneDayFromNow, twoWeeksFromNow, getUTCTime, getDateTimeForDB } = require('../helpers/date');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get pickJsonSchemaProperties() {
        return true;
    }

    $afterGet(context) {
        if (!context.withPassword) {
            delete this.password;
        }
    }

    async $beforeInsert(queryContext) {
        this.created_at = getDateTimeForDB();
        try {
            this.password = await bcrypt.hash(this.password, saltRounds);
        } catch (error) {
            throw 'Something went wrong';
        }
    }

    $beforeUpdate() {
        this.updated_at = getDateTimeForDB();
    }

    static get jsonSchema() {
        return {
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                login_tokens: {
                    type: 'array',
                    properties: { ip: { type: 'string' }, token: { type: 'string' }, ua: { type: 'string' } },
                },
                reset_token: { type: ['string', 'null'] },
                created_at: { type: 'string' },
                updated_at: { type: 'string' },
            },
        };
    }

    static async isEmailUnique(email) {
        try {
            return await this.query()
                .where('email', email)
                .count({ id: 'id' });
        } catch (error) {
            console.log(error);
        }
    }

    async generatePasswordHash(text) {
        return await bcrypt.hash(text, saltRounds);
    }

    generateToken(expiration) {
        return jwt.sign({ id: this.id, iat: getUTCTime(), expiresAt: expiration }, process.env.JWT_SECRET);
    }

    async authenticate(text) {
        return await bcrypt.compare(text, this.password);
    }

    async deleteLoginToken(req, res, deleteAll = false) {
        if (deleteAll) {
            await this.$query().patch({
                login_tokens: [],
            });
        } else {
            await this.$query().patch({
                login_tokens: this.login_tokens.filter(lt => lt.token !== req.login_token),
            });
        }
    }

    async deleteCookies(res) {
        res.clearCookie('user_login', { httpOnly: true });
    }

    async logout(req, res, logoutAll = false) {
        this.deleteCookies(res);
        try {
            await this.deleteLoginToken(req, res, logoutAll);
        } catch (error) {
            throw Error('Deleting tokens failed');
        }
    }

    async login(req, res, remember = false) {
        const token = this.generateToken(remember ? twoWeeksFromNow() : oneDayFromNow());

        if (!this.login_tokens || !this.login_tokens.length) {
            this.login_tokens = [];
        }

        this.login_tokens.push({
            ip: req.ip,
            token: token,
            ua: req.headers['user-agent'],
        });
        try {
            await this.$query().patch({
                login_tokens: this.login_tokens,
            });
            const oneYearFromNow = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365 * 1);
            res.cookie('user_login', token, { httpOnly: true, expires: oneYearFromNow });
        } catch (error) {
            console.log('error ', error);
            throw { name: 'login_error', message: error };
        }
    }
}

module.exports = User;
