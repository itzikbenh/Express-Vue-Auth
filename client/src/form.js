import axios from 'axios';
//So cookies will be sent to cross domains
if (process.env.NODE_ENV === 'development') {
    axios.defaults.withCredentials = true;
}

class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor() {
        this.errors = {};
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field];
        }
    }

    /**
     * Return list of errors.
     */
    list() {
        let list = [];
        Object.keys(this.errors).forEach(error => {
            list.push(this.errors[error]);
        });

        return list;
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    record(errors) {
        this.errors = errors;
    }

    /**
     * Clear one or all error fields.
     *
     * @param {string|null} field
     */
    clear(field) {
        if (field) {
            delete this.errors[field];

            return;
        }

        this.errors = {};
    }
}

export default class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     *  @param {boolean} reset
     */
    constructor(data, reset = true) {
        this.originalData = data;
        this.isSubmitting = false;
        this.resetForm = reset;

        Object.keys(data).forEach(attr => (this[attr] = data[attr]));

        this.errors = new Errors();
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {};

        Object.keys(this.originalData).forEach(attr => (data[attr] = this[attr]));

        return data;
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            if (Array.isArray(this[field])) {
                this[field] = [];
            } else {
                this[field] = '';
            }
        }

        this.errors.clear();
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url) {
        return this.submit('post', url);
    }

    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url) {
        return this.submit('put', url);
    }

    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
    patch(url) {
        return this.submit('patch', url);
    }

    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    async submit(requestType, url) {
        axios.defaults.headers.common['CSRF-Token'] = document.cookie.replace(
            /(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
            '$1',
        );

        try {
            this.isSubmitting = true;
            let res = await axios[requestType](url, this.data());
            this.isSubmitting = false;
            if ((requestType === 'post' || requestType === 'delete') && this.resetForm) {
                this.reset();
            }
            this.errors.clear();
            return res.data;
        } catch (error) {
            console.log(error);
            this.isSubmitting = false;
            if (error.response.status == 422 || error.response.status == 423) {
                this.onFail(error.response.data);
            }
            throw error.response;
        }
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        this.reset();
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors);
    }
}
