const siteData = require("../data/siteData");
const User = require("../models/user");

module.exports = {
    index: (req, res) => {
        res.render('pages/index', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    },
    register_get: (req, res) => {
        res.render('pages/register', {
            copyrightYear: siteData.year
        });
    },
    register_post: (req, res) => {
        const { username, email, password } = req.body;
        const newUser = new User({
            username: username,
            email: email,
            password: password
        })
        newUser.save();
        res.redirect('pages/admin'); {
        }
    }
}