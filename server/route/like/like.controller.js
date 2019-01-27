const Like = require('./like.model');
const Article = require('../article/article.model');

/**
 * Load number of likes and append to req
 */
function load(req, res, next, id) {
  Like.getByArticle(id)
    .then(likes => {
      req.articleId = id;
      req.likes = likes;
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get likes
 * @returns {Likes}
 */
function get(req, res) {
  return res.json({ articleId: req.articleId, likes: req.likes });
}

/**
 * Create new like
 * @property  {string}  req.body.articleId - Article id
 *
 */
function create(req, res, next) {
  Article.get(req.body.articleId)
    .then(() => {
      const like = new Like({
        article: req.body.articleId,
      });
      like
        .save()
        .then(() => {
          Like.getByArticle(req.body.articleId).then(likes => res.json(likes));
        })
        .catch(e => next(e));
    })
    .catch(e => next(e));
}

module.exports = { get, create, load };
