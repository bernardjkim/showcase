const jsonwebtoken = require('jsonwebtoken');
const config = require('../../config/config');

/**
 * This function takes in a payload and optional sign options and will return
 * a promise returning either a jwt token or an error.
 *
 * @param   {object}  payload
 * @param   {object}  options (optional sign options)
 * @return  {Promise}         signed jwt token
 */
function sign(payload, options = { expiresIn: '7 days' }) {
  return new Promise((resolve, reject) => {
    jsonwebtoken.sign(payload, config.jwtSecret, options, (err, token) => {
      if (err) reject(err);
      else resolve(`Bearer ${token}`);
    });
  });
}

module.exports = { sign };
