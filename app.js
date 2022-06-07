require('dotenv').config();
const methodOverride = require('method-override');
const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const session = require('express-session');
const passport = require('passport');
const PORT = process.env.PORT||3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride('_method'));
// app.use(morgan('dev'));
app.use(routes);

require('./config/connection');

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});