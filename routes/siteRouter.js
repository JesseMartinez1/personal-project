const express = require('express');
const siteController = require('../controllers/siteController');

const router = express.Router();

router.route('/')
    .get(siteController.index);

router.route('/register')
    // .get(siteController.register_get)
    .post(siteController.register_post)

router.route('/login')
    // .get(siteController.login_get)
    .post(siteController.login_post)
    
router.route('/auth/google')
    .get(siteController.google_get)

router.route('/auth/google/admin')
    .get(siteController.google_redirect_get)
   
router.route('/logout')
    .get(siteController.logout)


router.route('auth/google')
    // .get(siteController.google_get)

router.route('auth/google/')
    // .get(siteController.google_redirect_get)

module.exports = router;