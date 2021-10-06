const { INTERNAL_SERVER_ERROR } = require('../response/error');
const ApiError = require('../services/api-error');
const logger = require('../services/winston');

const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

const errorHandler = (err, req, res, next) => {
    if (!err.statusCode) {
        err = {
            ...INTERNAL_SERVER_ERROR,
            result: {
                errorStack: err.stack
            }
        }
    }
    logger.error(err);
    res.status(err.statusCode).send(err);
}

module.exports = {
    errorHandler,
    catchAsync
}