const express = require('express');
const router = express.Router();
const pageContent = require('../data/reports');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', pageContent);
});

module.exports = router;
