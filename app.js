'use strict';
// Module Imports
const express = require('express');
const app = express();
const ApiError = require('./utils/api-error');
const { errorHandler, errorConverter, catchAsync } = require('./middleware/error-middleware');
const userRoutes = require('./routes/user.route');
const passport = require('passport');
const { jwtStrategy } = require('./utils/passport');

// Parse json request body
app.use(express.json());

// Initialize Passport and strategies
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// Routes
app.use('/user', userRoutes);

// Handle errors thrown
app.use(errorHandler);

module.exports = app;