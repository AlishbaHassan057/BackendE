const mongoose = require('mongoose');
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Your Database has been connected on host: ${mongoose.host}`)
}
module.exports = connectDB;