const Like = require('./like.model');

// function load(req, res, next, id) {}

/**
 * Get likes
 * @returns {Number}
 */
function get(req, res) {
  return res.json(req.likes);
}

/**
 * Create new like
 * @property  {string}  req.body.articleId - Article id
 *
 */
function create(req, res, next) {
  const like = new Like({
    article: req.body.articleId,
  });
  like
    .save()
    .then(() => {
      Like.getByArticle(req.body.articleId).then(likes => res.json(likes));
    })
    .catch(e => next(e));
}

module.exports = { get, create };
