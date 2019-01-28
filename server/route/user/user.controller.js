const User = require('./user.model');

/**
 * Load user and append to req
 */
function load(req, res, next, id) {
  User.get(id)
    .then(user => {
      req.user = user;
      return next();
    })
    .catch(e => next(e));
}
/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json({ user: req.user });
}

/**
 * Create new user
 * @property  {string}  email     - User email
 * @property  {string}  password  - User password
 *
 */
function create(req, res, next) {
  User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(savedUser => res.json({ user: savedUser }))
    .catch(e => next(e));
}

module.exports = { load, get, create };
