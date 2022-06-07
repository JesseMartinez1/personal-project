const siteData = require("../data/siteData");

module.exports = {
    login: (req, res) => {
        res.render('pages/login', {
            copyrightYear: siteData.year
        });
    },
    login_post: (req, res) => {
        const { email, password } = req.body;
        const user = new User({
            email: email,
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
}