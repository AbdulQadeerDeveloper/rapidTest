// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();
const connectDB = require('./app/config/db.config'); // DB Config
const bodyParser = require('body-parser');

connectDB();
// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());



// Routes
app.use('/uploads', express.static('uploads'));
require('./app/config/googleAuth.config')(passport);// Passport Config

app.use(require('./app/routes/authRoute/registerRoute'));
app.use(require('./app/routes/authRoute/loginRoute'));
app.use(require('./app/routes/authRoute/forgotPasswordRoute'));
app.use(require('./app/routes/authRoute/resetPasswordRoute'));
app.use(require('./app/routes/productRoute/uploadFile'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});












