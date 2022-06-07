const express = require('express');
const siteRouter = require('./siteRouter');
const resultsRouter = require('./resultsRouter');
const reviewRouter = require('./reviewRouter');
const adminRouter = require('./adminRouter');
// const errorRouter = require('./errorRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/results', resultsRouter);
router.use('/review', reviewRouter);
router.use('/admin', adminRouter)
// router.use('/error', errorRouter);

module.exports = router;
