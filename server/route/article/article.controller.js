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
 *
 * @param   {User}  req.user  - Requesting user
 *
 * @returns {Article}
 */
async function random(req, res, next) {
  // Count number of articles in db
  const count = Article.count().catch(e => next(e));
  if ((await count) === 0) {
    const error = new APIError(
      'No articles found',
      httpStatus.INTERNAL_SERVER_ERROR,
    );
    return next(error);
  }

  // Choose random article
  const article = Article.findOne()
    .skip(Math.floor(Math.random() * (await count)))
    .catch(e => next(e));

  // Check if article has been liked by current user
  const likedByUser = Like.findOne({
    article: await article,
    user: req.user,
  }).catch(e => next(e));

  // Get total number of likes for the article
  const likes = Like.getByArticle(await article).catch(e => next(e));

  // Append data and send response
  const obj = (await article).toObject();
  obj.likes = await likes;
  obj.likedByUser = !!(await likedByUser);
  return res.json({ article: obj });
}

module.exports = { load, get, create, random, parse };
