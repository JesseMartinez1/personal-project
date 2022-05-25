const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/resultsController');

router.route('/')
    .get(resultsController.results)

module.exports = router;