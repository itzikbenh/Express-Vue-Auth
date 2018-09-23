module.exports = (req, res, next) => {
    function deepTrim(params) {
        Object.keys(params).forEach(property => {
            if (typeof params[property] === 'object' || params[property] instanceof Object) {
                deepTrim(params[property]);
            } else if (typeof params[property] === 'string' || params[property] instanceof String) {
                params[property] = params[property].trim() ? params[property].trim() : null;
            }
        });
    }
    deepTrim(req.body);

    next();
};
