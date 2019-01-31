const httpStatus = require('http-status');
const APIError = require('../error/APIError');
const User = require('../user/user.model');
const { sign } = require('../../util/jwt');

/**
 * Returns jwt token if valid email and password is provided
 *
 * @property  {string}  req.body.email    - User email
 * @property  {string}  req.body.password - User password
 */
function create(req, res, next) {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) next(new APIError('Invalid email!', httpStatus.NOT_FOUND));
      // Compare password
      user
        .comparePassword(password)
        .then(() => {
          // Generate jwt token
          sign({ id: user.id })
            .then(token => res.json({ token }))
            .catch(e => next(e));
        })
        .catch(e => next(e));
    })
    .catch(e => next(e));
}

module.exports = { create };
