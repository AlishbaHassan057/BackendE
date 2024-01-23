// const User = require('../models/userModel')
// const AsyncHandler = require('express-async-handler')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const registerUser = AsyncHandler(async (req, res) => {
//     const { f_name, l_name, m_mail, password, DOB, gender, image } = req.body;
//     // check if user already exists
//     const checkUser = await User.findOne({ m_mail })
//     if (checkUser) {
//         res.status(400);
//         throw new Error('User already exists!');
//     } else {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         const createdUser = await User.create(
//             {
//                 f_name,
//                 l_name

//             }
//         )

//         res.json(
//             {
//                 f_name,
//                 l_name

//             }
//         )
//     }

// })




// module.exports = {
//     registerUser
// }