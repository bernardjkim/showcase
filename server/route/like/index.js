const express = require('express');
const like = require('./like.controller');
const auth = require('../auth/auth.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')

  /** GET /api/like - Get all list of user's likes */
  .get(auth.authenticate, like.list)

  /** POST /api/like - Create new like */
  .post(auth.authenticate, like.create);

router
  .route('/:articleId')

  /** GET /api/like/:articleId - Get likes for specified article */
  .get(like.get);

router.param('articleId', like.load);

module.exports = router;
