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
        const { username, email, rating, headline, restroomAttributes, commentText, img, isApproved } = req.body;
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
        // should i redirect to a thank you page ?
    }
}    