const AsyncHandler = require('express-async-handler');
const Register = require('../models/registerModel');
const { model } = require('mongoose');

const registerUser = AsyncHandler(async (req, res) => {
    const {
        f_name,
        l_name,
        email,
        phone_number,
        city,
        address,
        title,
        Event_name,
        Expected_date,
        Event_Accessibility,
        persons,
        event_duration,
        acceptedTerms
    } = req.body;

    try {
        const registeredUser = await Register.create({

            f_name,
            l_name,
            email,
            phone_number,
            city,
            address,
            title,
            Event_name,
            Expected_date,
            Event_Accessibility,
            persons,
            event_duration,
            acceptedTerms
        })
        res.send(registeredUser)
    } catch (error) {
        console.log(error)

    }
})
module.exports = {
    registerUser
}