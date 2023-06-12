var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var colors = require('colors');
const { connectDB } = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

// Connect Database
connectDB();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/home'));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`🏎  DRONE Server up and running at ${PORT}`));

