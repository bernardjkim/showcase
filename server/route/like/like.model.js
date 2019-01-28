const mongoose = require('mongoose');

/**
 * Like Schema
 */
const LikeSchema = new mongoose.Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user',
  //   required: true,
  // },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'article',
    required: true,
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
