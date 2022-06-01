const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter your email.']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password.']
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;