'use strict';
class ApiError extends Error {
    constructor(errorObject) {
        const { message, statusCode } = errorObject;
        super(message);
        this.statusCode = statusCode;
        this.result = (errorObject.result)? errorObject.result: {};
        // error stack available in 'this'
    }
}

module.exports = ApiError;
