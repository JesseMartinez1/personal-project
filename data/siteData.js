const User = require("../models/user");

let date = new Date();

module.exports = {
    username: User.username,
    year: date.getFullYear(),
    signedIn: true
}