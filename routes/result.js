import express from 'express';
import {reports} from '../data/reports.js';

const router = new express.Router();

router.get('/', function (req, res, next) {
  res.send('This route only receives a form or XHR POST');
});

router.post('/', function (req, res, next) {
  // If it's an AJAX request, respond with some JSON otherwise render the index page
  if (req.xhr) {
    res.status(200).send({});
  } else {
    console.log(req.body.rating);
    console.log(reports);

    reports.rating = req.body.rating;

    res.render('index', reports);
  }
});

export {router as resultRouter};
