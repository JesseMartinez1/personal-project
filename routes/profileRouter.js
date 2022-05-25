const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.route('/')
    .get(profileController.profile);

module.exports = router;