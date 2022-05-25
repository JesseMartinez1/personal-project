const siteData = require("../data/siteData");

module.exports = {
    profile: (req, res) => {
        res.render('pages/profile', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    }
}