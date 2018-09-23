module.exports = {
    generateFormErrors: errors => {
        const newErrors = {};
        errors.forEach(err => {
            if (!newErrors.hasOwnProperty(err.param)) {
                newErrors[err.param] = err.msg;
            }
        });
        return newErrors;
    },
};
