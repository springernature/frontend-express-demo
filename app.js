// import {createError} from 'http-errors';
import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import {indexRouter} from './routes/index.js';
import {resultRouter} from './routes/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/result', resultRouter);

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// error handler
app.use((err, req, res, next) => {
	console.log(err.status);
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
