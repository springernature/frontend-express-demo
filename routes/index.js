import express from 'express';
import pageContent from '../data/reports.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', pageContent);
});

export {router as indexRouter};
