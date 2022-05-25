const siteData = require("../data/siteData");

module.exports = {
    results: (req, res) => {
        res.render('pages/results', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    }
}