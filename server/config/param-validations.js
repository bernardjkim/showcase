const Joi = require('joi');

module.exports = {
  // POST /api/article
  createArticle: {
    body: {
      title: Joi.string().required(),
      uri: Joi.string()
        .uri()
        .trim()
        .required(),
    },
  },
};
