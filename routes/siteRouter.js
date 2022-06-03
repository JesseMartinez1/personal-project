const express = require('express');
const siteController = require('../controllers/siteController');

const router = express.Router();

router.route('/')
    .get(siteController.index);

router.route('/register')
    .get(siteController.register_get)
    .post(siteController.register_post)

router.route('/login')
    // .get(siteController.login_get)
    // .post(siteController.login_post)

module.exports = router;