const express = require('express');
const userRoutes = express.Router();
const { catchAsync } = require('../middleware/error-middleware');
const ApiError = require('../utils/api-error');
const userController = require('../controllers/user.controller');
const userValidator = require('../validators/user.validator');
const { validate } = require('../utils/helper');

// User Routes
userRoutes.get('/getAll', validate(userValidator.getAll), catchAsync(userController.getAll));

module.exports = userRoutes;