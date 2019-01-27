const mongoose = require('mongoose');

/**
 * Comment Schema
 */
const CommentSchema = new mongoose.Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user',
  // },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'article',
  },
  value: {
    type: String,
    required: true,
  },
  // subcomments: [SubComment]
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
CommentSchema.method({});

/**
 * Statics
 */
CommentSchema.statics = {
  /**
   * Get list of comments by article
   */
  getByArticle(id) {
    return this.find({ article: id })
      .exec()
      .then(comments => comments);
  },
};

/**
 * @typedef comment
 */
module.exports = mongoose.model('comment', CommentSchema);
