const Comment = require('./comment.model');
const Article = require('../article/article.model');
const User = require('../user/user.model');

/**
 * Load comments and append to req
 */
function load(req, res, next, id) {
  Comment.getByArticle(id)
    .then(comments => {
      req.articleId = id;
      req.comments = comments;
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get comments
 * @returns {Comments}
 */
function get(req, res) {
  return res.json({ comments: req.comments });
}

/**
 * Create new comment
 * @property  {string}  req.body.articleId  - Article id
 * @property  {string}  req.body.value      - Comment value
 * @property  {User}    req.user            - Posting user
 *
 */
function create(req, res, next) {
  // NOTE: for now get test user, want to extract user from token
  User.findById(req.user._id) // eslint-disable-line no-underscore-dangle
    .then(user => {
      Article.get(req.body.articleId) // verify article exists
        .then(article => {
          Comment.create({ article, value: req.body.value, user })
            .then(savedComment => res.json({ comment: savedComment }))
            .catch(e => next(e));
        })
        .catch(e => next(e));
    })
    .catch(e => {
      next(e);
    });
}

module.exports = { get, create, load };
