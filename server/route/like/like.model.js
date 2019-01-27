// const Promise = require('bluebird');
const mongoose = require('mongoose');
// const httpStatus = require('http-status');
// const APIError = require('../error/APIError');

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
      .then(count => count);
  },
};

/**
 * @typedef like
 */
module.exports = mongoose.model('like', LikeSchema);
