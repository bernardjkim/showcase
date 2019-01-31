const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const config = require('../../config/config');
const User = mongoose.model('user');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.jwtSecret;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      User.findById(payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(e => done(e, false));
    }),
  );
};
