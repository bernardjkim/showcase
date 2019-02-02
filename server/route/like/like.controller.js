const httpStatus = require('http-status');
const Like = require('./like.model');
const Article = require('../article/article.model');
const User = require('../user/user.model');

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
  User.findById(req.user._id) // eslint-disable-line no-underscore-dangle
    .then(user => {
      Article.get(req.body.articleId)
        .then(article => {
          Like.create({ article, user })
            .then(() => {
              Like.getByArticle(article).then(() => {
                res.status(httpStatus.CREATED);
                res.send();
              });
            })
            .catch(e => next(e));
        })
        .catch(e => next(e));
    })
    .catch(e => {
      next(e);
    });
}

/**
 * Get list of likes
 *
 * @returns {array} - Array of likes
 */
function list(req, res, next) {
  Like.find({ user: req.user._id }) // eslint-disable-line no-underscore-dangle
    .then(likes => {
      res.json({ likes });
    })
    .catch(e => next(e));
}

module.exports = { get, create, load, list };
