const siteData = require("../data/siteData");
const Restrooms = require("../models/restrooms");

module.exports = {
    results: (req, res) => {
        Restrooms.find({isApproved:true}, (error, allRestrooms) => {
            if (error) {
                return error;
            } else {
                res.render('pages/results', {
                    copyrightYear: siteData.year,
                    restroomsArray: allRestrooms
                });
            }
        })
    },     
}
