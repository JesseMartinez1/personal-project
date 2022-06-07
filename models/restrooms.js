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
    locationName: {
        type: String,
        required: [true, 'Please enter a location name.']
    },
    locationAddress: {
        type: String,
        required: [true, 'Please enter a location address.']
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
    restroomAttributes: {
        type: Array
    },
    commentText: {
        type: String,
        required: [true, 'Please enter a written review.'],
        minlength: [10, 'Minimum length for the written review is 10 characters.'],
        maxlength: [4000, 'Maximum length for the written review is 4000 characters.']
    },
    img: {
        data: Buffer,
        contentType: String
    },
    isApproved: {
        type: Boolean
    }
});

const Restroom = mongoose.model('Restroom', restroomSchema);
module.exports = Restroom;