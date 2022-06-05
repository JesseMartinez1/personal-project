const mongoose = require('mongoose');
const { Schema } = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        // required: [true, 'Please enter your name.'],
        minlength: [2, 'Minimum length for your name is 2 characters.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email.']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password.'],
        // minlength: [8, 'Minimum length for your password is 8 characters.']
    },
    isAdmin: {
        type: Boolean
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;