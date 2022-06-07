const mongoose = require('mongoose');
const { Schema } = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter your name.'],
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
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
    done(null, user.id)
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user)
    })
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
    function (accessToken, refreshToken, email, cb) {
        User.findOrCreate({ googleId: email.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

module.exports = User;