const Article = require('./article.model');

/**
 * Load user and append to req
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
  const article = new Article({
    title: req.body.title,
    uri: req.body.uri,
    github: req.body.github,
    description: req.body.description,
  });

  article
    .save()
    .then(savedArticle => res.json(savedArticle))
    .catch(e => next(e));
}

module.exports = { load, get, create };
