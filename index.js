const express = require('express');
const app = express();
const connectDB = require('./config/Connect');

require('colors');

require('dotenv').config();
const mongoose = require('mongoose');


connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users/', require('./routes/userRoutes'));

app.listen(process.env.PORT, () => console.log(`Your server has been started on PORT: ${process.env.PORT.blue}`))