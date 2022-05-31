const mongoose = require('mongoose');
const { Schema } = mongoose;

const restroomSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter your full name.'],
        minlength: [1, 'Minimum length for the full name is 1 character.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address.']
    },
    rating: {
        type: Number,
        required: [true, 'Please rate enter a rating.'],
        min: [1, 'Minimum rating is 1'],
        max: [5, 'Maximum rating is 5']
    },
    headline: {
        type: String,
        required: [true, 'Please enter a headline.'],
        minlength: [2, 'Minimum length for the headline is 2 characters.']
    },
    // allGender: {
    //     type: Boolean
    // },
    // singleStall: {
    //     type: Boolean
    // },
    // wheelchairAccessibleStall: {
    //     type: Boolean
    // },
    // openToNonCustomers: {
    //     type: Boolean
    // },
    // toilet: {
    //     type: Boolean
    // },
    // urinal: {
    //     type: Boolean
    // },
    // multipleStalls: {
    //     type: Boolean
    // },
    // womensRoom: {
    //     type: Boolean
    // },
    // mensRoom: {
    //     type: Boolean
    // },
    // changingTable: {
    //     type: Boolean
    // },
    // menstrualProducts: {
    //     type: Boolean
    // },
    // automaticDoorOpener: {
    //     type: Boolean
    // },
    // restroomAttendant: {
    //     type: Boolean
    // },
    // floorToCeilingStallWalls: {
    //     type: Boolean
    // },
    // familyRestroom: {
    //     type: Boolean
    // },
    // noAccessKeyRequired: {
    //     type: Boolean
    // },
    // accessibleBagHooksInStall: {
    //     type: Boolean
    // },
    commentText: {
        type: String,
        required: [true, 'Please enter a written review.'],
        minlength: [50, 'Minimum length for the written review is 50 characters.'],
        maxlength: [4000, 'Maximum length for the written review is 4000 characters.']
    },
    img: {
        data: Buffer,
        contentType: String
    }
});

const Restroom = mongoose.model('Restroom', restroomSchema);
module.exports = Restroom;