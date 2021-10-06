'use strict';
// Load environment variables
require('dotenv').config();
// Load the configuration
const config = require('config');
// Module imports
const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const server = http.createServer(app);
console.log(config.mongodb.connectionString)
mongoose.connect(config.mongodb.connectionString).then(() => {
    console.log('MongoDB connection established');
    server.listen(config.serverPort,() => {
        console.log(`Listening on port ${config.serverPort}`)
    });
});




