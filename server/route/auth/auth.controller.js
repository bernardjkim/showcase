const httpStatus = require('http-status');
const APIError = require('../error/APIError');
const User = require('../user/user.model');
const { sign, decode } = require('../../util/jwt');

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
      else {
        user
          .comparePassword(password)
          .then(() => {
            // Generate jwt token
            sign({ user })
              .then(token => {
                const options = {
                  // maxAge: 1000 * 60 * 15, // would expire after 15 minutes
                  httpOnly: true, // The cookie only accessible by the web server
                  signed: true, // Indicates if the cookie should be signed
                };
                res.cookie('jwt', token, options);
                res.status(httpStatus.NO_CONTENT).send();
              })
              .catch(e => next(e));
          })
          .catch(e => next(e));
      }
    })
    .catch(e => next(e));
}

/**
 * Clears jwt cookie
 */
function remove(req, res) {
  res.clearCookie('jwt');
  res.status(httpStatus.NO_CONTENT).send();
}

// TODO: handle expired tokens
/**
 * Decode JWT and append user to req
 */
function parse(req, res, next) {
  const token = req.signedCookies.jwt;
  if (!token) next();
  else {
    // verify a token symmetric - synchronous
    decode(token)
      .then(decoded => {
        // const { iat, exp } = decoded;
        req.user = decoded.user;
        next();
      })
      .catch(e => next(e));
  }
}

/**
 * Verify that the JWT was parsed and appened to req
 */
function authenticate(req, res, next) {
  if (req.user) next();
  else {
    const error = new APIError('Unauthorized', httpStatus.UNAUTHORIZED);
    next(error);
  }
}

module.exports = { authenticate, create, parse, remove };
