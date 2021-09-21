'use strict';
// Module Imports
const express = require('express');
const app = express();
const ApiError = require('./utils/api-error');
const { errorHandler, errorConverter, catchAsync } = require('./middleware/error-middleware');
const userRoutes = require('./routes/user.route');

// Parse json request body
app.use(express.json());

// Routes
app.use('/user', userRoutes);

// Handle errors thrown
app.use(errorHandler);

module.exports = app;