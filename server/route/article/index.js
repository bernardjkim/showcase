const express = require('express');
const validate = require('express-validation');
const multer = require('multer');
const paramValidation = require('../../config/param-validations');
const article = require('./article.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/article - Get list of articles */
  // .get(article.list)

  /** POST /api/article - Create new article */
  // .post(validate(paramValidation.createArticle), article.create);
  .post(
    multer().single('test'),
    validate(paramValidation.createArticle),
    article.create,
  );

router
  .route('/:id')

  /** GET /api/article/id - Get article */
  .get(article.get);

/** Load article when API with id route parameter is hit */
router.param('id', article.load);

module.exports = router;
