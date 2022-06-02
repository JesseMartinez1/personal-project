const siteData = require("../data/siteData");
const Restroom = require("../models/restrooms");

module.exports = {
    review: (req, res) => {
        res.render('pages/review', {
            name: siteData.userName,
            copyrightYear: siteData.year,
            signedIn: siteData.signedIn
        });
    },
    create_restroom_post: (req, res) => {
        const { username, email, rating, headline, restroomAttributes, commentText, img } = req.body;
        console.log(req.body)
        const newRestroom = new Restroom({
            username: username,
            email: email,
            rating: rating,
            headline: headline,
            restroomAttributes: restroomAttributes,
            commentText: commentText,
            img: img,
            isApproved: false
        }); 
        newRestroom.save();
        res.redirect("/results");
    //     // should i redirect to a thank you page ?
    // },
    // update_restroom_put: (req, res) => {
    //     const { _id } = req.params;
    //     const { name, email, rating, headline, allGender, singleStall, wheelchairAccessibleStall, openToNonCustomers, toilet, urinal, multipleStalls, womensRoom, mensRoom, changingTable, menstrualProducts, automaticDoorOpener, restroomAttendant, floorToCeilingStallWalls, familyRestroom, noAccessKeyRequired, accessibleBagHooksInStall, commentText, img } = req.body;
    //     Restroom.findByIdAndUpdate(_id, {$set: {
    //             name: name,
    //             email: email,
    //             rating: rating,
    //             headline: headline,
    //             allGender: allGender,
    //             singleStall: singleStall,
    //             wheelchairAccessibleStall: wheelchairAccessibleStall,
    //             openToNonCustomers: openToNonCustomers,
    //             toilet: toilet,
    //             urinal: urinal,
    //             multipleStalls: multipleStalls,
    //             womensRoom: womensRoom,
    //             mensRoom: mensRoom,
    //             changingTable: changingTable,
    //             menstrualProducts: menstrualProducts,
    //             automaticDoorOpener: automaticDoorOpener,
    //             restroomAttendant: restroomAttendant,
    //             floorToCeilingStallWalls: floorToCeilingStallWalls,
    //             familyRestroom: familyRestroom,
    //             noAccessKeyRequired: noAccessKeyRequired,
    //             accessibleBagHooksInStall: accessibleBagHooksInStall,
    //             commentText: commentText,
    //             img: img
    //         }}, { new: true }, error => {
    //         if (error) {
    //             return error;
    //         } else {
    //             res.redirect('/admin');
    //         }
    //     });
    }
}    