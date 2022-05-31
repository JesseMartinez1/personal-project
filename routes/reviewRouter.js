const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.route('/')
    .get(reviewController.review)
    // .post(reviewController.create_restroom)

module.exports = router;