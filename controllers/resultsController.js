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

