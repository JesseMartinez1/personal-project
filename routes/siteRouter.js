const express = require('express');
const siteController = require('../controllers/siteController');

const router = express.Router();

router.route('/')
    .get(siteController.index);

module.exports = router;