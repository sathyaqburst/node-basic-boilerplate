'use strict';
// Load environment variables
require('dotenv').config();
// Load the configuration
const config = require('config');
// Module imports
const http = require('http');
const app = require('./app');
// console.log();

const server = http.createServer(app);
server.listen(config.get("serverPort"),() => {
    console.log(`Listening on port ${config.get("serverPort")}`)
});

