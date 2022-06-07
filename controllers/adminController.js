const siteData = require("../data/siteData");
const Restroom = require("../models/restrooms");

module.exports = {
    admin: (req, res) => {
        if (req.isAuthenticated()) {
            Restroom.find({}, (error, allRestrooms) => {
                if (error) {
                    return error;
                } else {
                    res.render('pages/admin', {
                        name: siteData.username,
                        copyrightYear: siteData.year,
                        signedIn: siteData.signedIn,
                        restroomArray: allRestrooms
                    });

                }
            })
        }
    },
    approve_restroom: (req, res) => {
        const { _id } = req.params;
        const { name, email, locationName, locationAddress, rating, headline, restroomAttributes, commentText, img, isApproved } = req.body;
        Restroom.findByIdAndUpdate(_id, {
            $set: {
                name: name,
                email: email,
                locationName: locationName,
                locationAddress: locationAddress,
                rating: rating,
                headline: headline,
                restroomAttributes: restroomAttributes,
                commentText: commentText,
                img: img,
                isApproved: true
            }
        }, { new: true }, error => {
            if (error) {
                return error;
            } else {
                res.redirect('/results');
            }
        });
    },
    restroom_delete: (req, res) => {
        const { _id } = req.params;
        Restroom.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                res.redirect('/results')
            }
        });
    }
}
