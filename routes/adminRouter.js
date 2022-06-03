const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.route('/')
    .get(adminController.admin)
    
router.route('/:_id')
    .delete(adminController.restroom_delete)
    .put(adminController.approve_restroom)


module.exports = router;