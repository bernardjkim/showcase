const qs = require('qs');
const httpStatus = require('http-status');
const APIError = require('../error/APIError');
const Article = require('./article.model');
const Like = require('../like/like.model');

const { uploadFile } = require('../../util/s3');

/**
 * Load article and append to req
 *
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
 * Parse form and append fields to req
 *
 * @property  {object}  form  - Article form
 */
function parse(req, res, next) {
  const form = qs.parse(req.body.form);
  if (!form) {
    const error = new APIError('Missing form!', httpStatus.BAD_REQUEST);
    next(error);
  } else {
    req.body.title = form.title;
    req.body.uri = form.uri;
    req.body.github = form.github;
    req.body.description = form.description;
    req.body.tags = form.tags;
    next();
  }
}
/**
 * Get article
 * @returns {Article}
 */
function get(req, res) {
  return res.json({ article: req.article });
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
async function create(req, res, next) {
  const { file } = req;

  const key = new Promise(resolve => {
    if (!file) {
      const error = new APIError('Invalid image file!', httpStatus.BAD_REQUEST);
      next(error);
    } else {
      uploadFile(file.buffer, file.originalname, file.mimetype)
        .then(data => {
          resolve(data.key);
        })
        .catch(e => next(e));
    }
  });

  const article = new Article({
    title: req.body.title,
    uri: req.body.uri,
    github: req.body.github,
    description: req.body.description,
    image: await key,
    tags: req.body.tags,
  });

  article
    .save()
    .then(savedArticle =>
      res.status(httpStatus.CREATED).json({ article: savedArticle }),
    )
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
          Like.findOne({ article: article._id });

          // eslint-disable-next-line no-underscore-dangle
          Like.getByArticle(article._id).then(likes => {
            const obj = article.toObject();
            obj.likes = likes;
            return res.json({ article: obj });
          });
        })
        .catch(e => next(e));
    })
    .catch(e => next(e));
}

module.exports = { load, get, create, random, parse };
