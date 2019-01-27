const express = require('express');
const like = require('./like.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')

  /** POST /api/like - Create new like */
  .post(like.create);

router
  .route('/:articleId')

  /** GET /api/like/:articleId - Get likes for specified article */
  .get(like.get);

router.param('articleId', like.load);

module.exports = router;
