'use strict';
module.exports = {
    serverPort: 3003,
    jwt: {
        secret: process.env.JWT_SECRET,
        accessExpirationMinutes: 15
    },
    mongodb: {
        connectionString: process.env.MONGO_STRING
    }
}