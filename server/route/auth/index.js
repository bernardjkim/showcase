const express = require('express');
const router = express.Router();
const validate = require('express-validation');
const paramValidation = require('../../config/param-validations');

const auth = require('./auth.controller');

router
  .route('/')

  /** POST /api/auth - authenticate user */
  .post(validate(paramValidation.createAuth), auth.create);

module.exports = router;