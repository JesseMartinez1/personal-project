const siteData = require("../data/siteData");

module.exports = {
    index: (req, res) => {
        res.render('pages/index', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    }
}