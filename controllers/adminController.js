const siteData = require("../data/siteData");
const Restroom = require("../models/restrooms");

module.exports = {
    admin: (req, res) => {
        Restroom.find({}, (error, allRestrooms) => {
            if (error) {
                return error;
            } else {
                res.render('pages/admin', {
                    name: siteData.userName,
                    copyrightYear: siteData.year,
                    signedIn: siteData.signedIn,
                    restroomArray: allRestrooms
                });
                // unapproved_restrooms: (req, res) => {
                //     Restroom.find({}, error, allRestrooms) => {
                //         if (error) {
                //             return error;
                //         } else {
                //             res.render('pages/admin', {
                //                 name: siteData.userName,
                //                 copyrightYear: siteData.year,
                //                 restroomArray: allRestrooms
                //             });
                //         }
                //     }
                // }
                // admin: (req, res) => {
                //     if (req.isAuthenticated()) {
                //         res.render('pages/admin', {
                //             name: siteData.userName,
                //             copyrightYear: siteData.year,
                //             signedIn: siteData.signedIn
                //         });
                //     } else {
                //         response.redirect('/login')
                //     }
                // },
                // unapproved_restrooms: (req, res) => {
                //     if (req.isAuthenticated()) {
                //         Restroom.find({}, (error, allRestrooms) => {
                //             if (error) {
                //                 return error;
                //             } else {
                //                 res.render('pages/admin', {
                //                     copyrightYear: siteData.year,
                //                     restroomArray: allRestrooms
                //                 });
                //             }
  
                //         })
                //     } else {
                //         res.redirect('/')
                // can i get this to redirect to the login modal?
                // }
            }
        })
    },
    create_restroom: (req, res) => {
        const { username, email, rating, headline, allGender, singleStall, wheelchairAccessibleStall, openToNonCustomers, toilet, urinal, multipleStalls, womensRoom, mensRoom, changingTable, menstrualProducts, automaticDoorOpener, restroomAttendant, floorToCeilingStallWalls, familyRestroom, noAccessKeyRequired, accessibleBagHooksInStall, commentText, img } = req.body;
        const newRestroom = new Restroom({
            username: username,
            email: email,
            rating: rating,
            headline: headline,
            commentText: commentText,
            img: img
        });
        newRestroom.save();
        res.redirect("/admin");
    },
    restroom_delete: (req, res) => {
        const { _id } = req.params;
        Restroom.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                res.redirect('/admin')
            }
        });
    }
}
