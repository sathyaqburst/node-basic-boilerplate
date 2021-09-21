const Joi = require('joi');
const ApiError = require('./api-error');
const { DATA_VALIDATION_ERROR } = require('../response/error');

const validate = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);

    if (error) {
        const errorData = error.details.map((detail) => detail.message);
        return next(new ApiError(
            {
                ...DATA_VALIDATION_ERROR,
                result: errorData
            }));
    }
    Object.assign(req, value);
    return next();
};

const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key];
        }
        return obj;
    }, {});
};

const sendSuccessResponse = (res, success, data = {}) => {
    res.status(success.statusCode).send({
        ...success,
        result: { ...data }
    });
}

module.exports = {
    pick,
    validate,
    sendSuccessResponse
}