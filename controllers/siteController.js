const passport = require('passport')
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
    // register_get: (req, res) => {
    //     res.render('pages/register', {
    //         copyrightYear: siteData.year
    //     });
    // },
    register_post: (req, res) => {
        const { username, password } = req.body;
        User.register({ username: username }, password, (error, user) => {
            if (error) {
                console.log(error);
                res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/');
                });
            }
        });
    },
    // login_get: (req, res) => {
    //     res.render('/login', {
    //         copyrightYear: siteData.year
    //     });
    // },
    login_post: (req, res) => {
        const { username, password } = req.body;
        const user = new User({
            username: username,
            password: password
        });

        req.login(user, (error) => {
            if (error) {
                console.log(error)
                res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin');
                });
            }
        });
    },
    logout: (req, res) => {
        req.logout(function (err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    },
    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/' }),
        function (req, res) {
            res.redirect('/admin');
        }
    ]
}


