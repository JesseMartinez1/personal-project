const siteData = require("../data/siteData");

module.exports = {
    results: (req, res) => {
        res.render('pages/results', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    }
    // approved_restrooms: (req, res) => {
    //     Restroom.find({isApproved: true}, (error, approvedRestrooms) => {
    //         if (isApproved === true) {
    //             res.render('pages/results', {
    //                 approvedRestroomArray: approvedRestrooms
    //             })
    //         }
    //         else if (error) {
    //             return error;
    //         } 
    //     });
}
