const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.route('/')
    .get(adminController.admin)





module.exports = router;