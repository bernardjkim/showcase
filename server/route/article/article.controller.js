const Article = require('./article.model');
const Like = require('../like/like.model');

const { uploadFile } = require('../../util/s3');

/**
 * Load article and append to req
 */
function load(req, res, next, id) {
  Article.get(id)
    .then(article => {
      req.article = article;
      return next();
    })
    .catch(e => next(e));
}
/**
 * Get article
 * @returns {Article}
 */
function get(req, res) {
  return res.json(req.article);
}

/**
 * Create new article
 * @property  {string}  title       - Website title
 * @property  {string}  uri         - Website uri
 * @property  {string}  github      - GitHub repo
 * @property  {string}  description - Website description
 * @property  {File}    image       - Website screenshot
 *
 */
function create(req, res, next) {
  const { file } = req;

  uploadFile(file.buffer, file.originalname, file.mimetype)
    .then(data => {
      const article = new Article({
        title: req.body.title,
        uri: req.body.uri,
        github: req.body.github,
        description: req.body.description,
        image: data.key,
      });

      article
        .save()
        .then(savedArticle => res.json(savedArticle))
        .catch(e => next(e));
    })
    .catch(e => next(e));
}

/**
 * Load random article and append to req
 */
function random(req, res, next) {
  // Get the count of all articles
  Article.count()
    .exec()
    .then(count => {
      // Get a random entry
      const rand = Math.floor(Math.random() * count);

      // Again query all articles but only fetch one offset by our random #
      Article.findOne()
        .skip(rand)
        .exec()
        .then(article => {
          // eslint-disable-next-line no-underscore-dangle
          Like.getByArticle(article._id).then(likes => {
            const obj = article.toObject();
            obj.likes = likes;
            req.article = obj;
            console.log(article);
            console.log(article.toObject());
            console.log(obj);
            return next();
          });
        })
        .catch(e => next(e));
    })
    .catch(e => next(e));
}

module.exports = { load, get, create, random };
