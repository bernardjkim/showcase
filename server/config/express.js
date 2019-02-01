/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const expressValidation = require('express-validation');
const httpStatus = require('http-status');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const config = require('../config/config');
const routes = require('../route');
const APIError = require('../route/error/APIError');

const setup = require('../middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const { resolve } = require('path');
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here

if (isDev) app.use(logger('dev'));

// parsing application/json
app.use(bodyParser.json());
// parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// compress response bodies
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

app.use(cookieParser(config.cookieSecret));

// enable CORS - Cross Origin Resource Sharing
app.use(cors({ credentials: true }));

app.use('/api', routes);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors
      .map(error => error.messages.join('. '))
      .join(' and ');
    const error = new APIError(unifiedErrorMessage, err.status, true);
    return next(error);
  }
  if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
});

// error handler, send stacktrace only during development
app.use((
  err,
  req,
  res,
  next, // eslint-disable-line no-unused-vars
) =>
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: isDev ? err.stack : {},
  }),
);

module.exports = app;
