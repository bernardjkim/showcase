const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../error/APIError');
const Like = require('../like/like.model');

/**
 * Comment Schema
 */
const CommentSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  children: [this],
});

/**
 * Article Schema
 */
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  uri: {
    type: String,
    required: true,
  },

  github: {
    type: String,
    required: false,
  },

  image: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },

  comments: [CommentSchema],
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

// eslint-disable-next-line
ArticleSchema.pre('save', function(next) {
  const article = this;

  const like = new Like({
    article: article._id, // eslint-disable-line no-underscore-dangle
  });

  like.save().catch(e => next(e));
  next();
});

/**
 * Methods
 */
ArticleSchema.method({});

/**
 * Statics
 */
ArticleSchema.statics = {
  /**
   * Get article
   * @param   {ObjectId}                    id  - The objectId of article.
   * @returns {Promise<Article, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then(article => {
        if (article) return article;

        const err = new APIError(
          'No such article exists!',
          httpStatus.NOT_FOUND,
        );
        return Promise.reject(err);
      });
  },
};

/**
 * @typedef article
 */
module.exports = mongoose.model('article', ArticleSchema);
