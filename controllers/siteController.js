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
        const { username, email, password, isAdmin } = req.body;
        const newUser = new User({
            username: username,
            email: email,
            password: password,
            isAdmin: false
        })
        newUser.save();
        res.redirect('pages/admin'); {
        }
    },
    login_get: (req, res) => {
        res.render('pages/login', {
            copyrightYear: siteData.year
        });
    },
    login_post: (req, res) => {
        console.log(req.body.email);
        const { email, password } = req.body;
        User.findOne({ email: email }, (error, foundUser) => {
            if (error) {
                console.log(`The error at login is: ${error}`);
            } else {
                if (foundUser) {
                    console.log(`email was matched: ${foundUser.email}`);
                    console.log(`their password is matched: ${foundUser.password}`);
                    if (foundUser.password === password) {
                        console.log(`user ${foundUser.email} logged in`);
                        res.redirect('/admin')
                    };
                };
            };
        });
    }       
}
