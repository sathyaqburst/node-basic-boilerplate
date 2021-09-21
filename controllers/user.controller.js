const { GETALL_SUCCESS } = require('../response/success');
const userModel = require('../models/user.model');
const { sendSuccessResponse } = require('../utils/helper');

const getAll = async (req, res) => {
    const userList = await userModel.getAll();
    sendSuccessResponse(res, GETALL_SUCCESS, { list : userList })
}

module.exports = {
    getAll
}