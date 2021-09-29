'use strict';
module.exports = {
    serverPort: process.env.SERVER_PORT,
    jwt: {
        secret: process.env.JWT_SECRET,
        accessExpirationMinutes: 15
    }
}