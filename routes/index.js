const express = require('express');
const router = express.Router();

const itor = require('../services/itor')
/* GET home page. */
router.get('/itor', function(req, res, next) {
  res.set({
    'Content-Type': 'text/plain'
  })
  res.send(itor(parseInt(req.query.value)))
});

module.exports = router;
