import express from 'express';
import {format, isValid} from 'date-fns';
import pageContent from '../data/reports.js';

const router = new express.Router();

const formatDate = dateString => {
	const utcDate = new Date(dateString);

	if (!isValid(utcDate)) {
		return;
	}

	return format(utcDate, 'dd-MMM-yyyy');
};

pageContent.reviewDate = formatDate(pageContent.reviewDate);

router.get('/', function (req, res, next) {
  res.send('This route only receives a form or XHR POST');
});

router.post('/', function (req, res, next) {
  // If it's an AJAX request, respond with some JSON otherwise render the index page
  if (req.xhr) {
    res.status(200).send({});
  } else {
    res.render('index', pageContent);
  }
});

export {router as resultRouter};
