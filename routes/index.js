import express from 'express';
import {reports} from '../data/reports.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', reports);
});

export {router as indexRouter};
