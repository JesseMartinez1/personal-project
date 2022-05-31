const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.route('/')
    .get(adminController.admin)
    .post(adminController.create_restroom)
    .delete(adminController.restroom_delete)





module.exports = router;