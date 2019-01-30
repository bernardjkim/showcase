const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const Promise = require('bluebird');
const httpStatus = require('http-status');
const APIError = require('../error/APIError');

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: false,
    default: 'Guest',
  },

  // profile: {},

  updated: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

// eslint-disable-next-line
UserSchema.pre('save', function(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  user.constructor.findOne({ email: user.email }).then(exists => {
    if (exists)
      next(new APIError('This email is taken', httpStatus.BAD_REQUEST));

    // generate a salt
    bcrypt
      .genSalt(SALT_WORK_FACTOR)
      .then(salt => {
        // hash the password using our new salt
        bcrypt
          .hash(user.password, salt)
          .then(hash => {
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
          })
          .catch(e => next(e));
      })
      .catch(e => next(e));
  });
});
/**
 * Methods
 */

UserSchema.method({
  /**
   * To JSON
   */
  toJSON() {
    const obj = this.toObject();
    delete obj.password;
    return obj;
  },

  /**
   * Compare candidatePassword with stored hash.
   *
   * @param {string}    candidatePassword - Password to compare
   * @param {Promise}
   */
  comparePassword(candidatePassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) reject(err);
        else if (isMatch) resolve(isMatch);

        const passwordError = new APIError(
          'Invalid password!',
          httpStatus.BAD_REQUEST,
        );
        reject(passwordError);
      });
    });
  },
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get article
   * @param   {ObjectId}                    id  - The objectId of user.
   * @returns {Promise<Article, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then(user => {
        if (user) return user;

        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },
};

/**
 * @typedef user
 */
module.exports = mongoose.model('user', UserSchema);
