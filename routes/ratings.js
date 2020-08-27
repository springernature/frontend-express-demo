const express = require('express');
const router = express.Router();
const pageContent = require('../data/reports');

router.get('/', function (req, res, next) {
  res.send('This route only receives a form or XHR POST');
});

router.post('/', function (req, res, next) {
  // Rating successfully saved;

  // TODO: Show a friendly confirmation message?
  if (req.xhr) { // If it's an AJAX request, respond with some JSON otherwise render the ratings page
    res.status(200).send({});
  } else {
    res.render('index', pageContent);
  }
});

module.exports = router;
