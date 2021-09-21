const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format : new Date().toLocaleString() }),
        winston.format.json()
    ),
    defaultMeta: {},
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({ filename: path.join(__dirname, '../logs/error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(__dirname, '../logs/combined.log') }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'prod') {
    logger.add(new winston.transports.Console({
        format: winston.format.json(),
    }));
}

module.exports = logger;