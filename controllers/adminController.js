const siteData = require("../data/siteData");

module.exports = {
    admin: (req, res) => {
        res.render('pages/admin', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    }
}