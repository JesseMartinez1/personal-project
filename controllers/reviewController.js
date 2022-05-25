const siteData = require("../data/siteData");

module.exports = {
    review: (req, res) => {
        res.render('pages/review', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    }
}