module.exports = (req, res, next) => {
    function deepTrim(params) {
        for (const [field, value] of Object.entries(params)) {
            if (typeof value === 'object' || value instanceof Object) {
                deepTrim(value);
            } else if (typeof value === 'string' || value instanceof String) {
                params[field] = value.trim() ? value.trim() : null;
            }
        }
    }

    deepTrim(req.body);

    next();
};
