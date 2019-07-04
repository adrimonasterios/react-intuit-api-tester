const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send('This page does not exist')
});

module.exports = router;
