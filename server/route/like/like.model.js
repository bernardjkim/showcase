const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');

const Article = require('../article/article.model');
const APIError = require('../error/APIError');

/**
 * Like Schema
 */
const LikeSchema = new mongoose.Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user',
  // },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'article',
  },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

// eslint-disable-next-line
LikeSchema.pre('save', function(next) {
  const like = this;

  // first verify article exists
  Article.get(like.article)
    .then(() => next())
    .catch(e => next(e));
});

/**
 * Methods
 */
LikeSchema.method({});

/**
 * Statics
 */
LikeSchema.statics = {
  /**
   * Get number of likes by article
   */
  getByArticle(id) {
    return this.count({ article: id })
      .exec()
      .then(count => {
        if (count) return count;

        const err = new APIError(
          'No such article exists!',
          httpStatus.NOT_FOUND,
        );
        return Promise.reject(err);
      });
  },
};

/**
 * @typedef like
 */
module.exports = mongoose.model('like', LikeSchema);
