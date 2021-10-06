const express = require('express');
const userRoutes = express.Router();
const { catchAsync } = require('../middleware/error-middleware');
const ApiError = require('../services/api-error');
const userController = require('../controllers/user.controller');
const userValidator = require('../validators/user.validator');
const { validate } = require('../services/helper');
const passport =require('passport');

// User Routes
userRoutes.get('/getAll', validate(userValidator.getAll), passport.authenticate('jwt', { session: false }), catchAsync(userController.getAll));

module.exports = userRoutes;