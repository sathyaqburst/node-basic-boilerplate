const { GETALL_SUCCESS } = require('../response/success');
const UserModel = require('../models/user.model');
const { sendSuccessResponse } = require('../services/helper');

const getAll = async (req, res) => {
    const userList = await UserModel.find({});
    console.log(userList)
    sendSuccessResponse(res, GETALL_SUCCESS, { list : userList })
}

module.exports = {
    getAll
}