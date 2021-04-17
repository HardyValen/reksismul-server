const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();
const sequelize = require("./db/connect");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/data', indexRouter);

// sequelize.authenticate()
//   .then(() => {console.log("OK")})
//   .catch(err => {console.log(err)})

module.exports = app;
