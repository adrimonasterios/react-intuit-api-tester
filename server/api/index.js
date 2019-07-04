const express = require('express');
const router = express.Router();

router.use('/quickbooks', require('./quickbooks'));
// 404
router.use('*', require('./404'));

module.exports = router;
