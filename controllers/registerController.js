const AsyncHandler = require('express-async-handler');
const Register = require('../models/registerModel');
const { model } = require('mongoose');

const registerUser = AsyncHandler(async (req, res) => {
    const { f_name, l_name } = req.body;

    try {
        const registeredUser = await Register.create({
            f_name, l_name,
        })
        res.send(registeredUser)
    } catch (error) {
        console.log(error)

    }
})
module.exports = {
    registerUser
}