const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: [true, 'Please enter first name']
    },
    l_name: {
        type: String,
        required: [true, 'Please enter last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter email']
    },
    phone_number: {
        type: String,
        required: [true, 'Please enter phone number']
    },
    city: {
        type: String,
        required: [true, 'Please enter city']
    },
    address: {
        type: String,
        required: false,
        default: null
    },

    title: {
        type: String,
        required: [true, 'Please enter title']
    },
    Event_name: {
        type: String,
        required: [true, 'Please enter event name']
    },
    Expected_date: {
        type: String,
        required: [true, 'Please enter expected date']
    },
    Event_Accessibility: {
        type: String,
        enum: ['Private', 'Public'],
        default: 'Public',
        required: [true, 'Please choose event accessibility']
    },
    persons: {
        type: String,
        required: [true, 'Please enter number of persons']
    },
    event_duration: {
        type: String,
        required: [true, 'Please enter time duration']
    },

    acceptedTerms: {
        type: String,
        required: true,
        enum: ['Yes', 'No'],
        default: 'Yes',
        required: [true, 'I agree to the terms and conditions']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Register', registerSchema);
