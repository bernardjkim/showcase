const Joi = require('joi');

module.exports = {
  // POST /api/user
  createUser: {
    body: {
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{6,30}$/)
        .required(),
      passwordConfirm: Joi.string()
        .required()
        .valid(Joi.ref('password'))
        .options({
          language: {
            any: {
              allowOnly: '!!Passwords do not match',
            },
          },
        }),
    },
  },

  // POST /api/article
  createArticle: {
    body: {
      title: Joi.string().required(),
      uri: Joi.string()
        .uri()
        .trim()
        .required(),
    },
  },
};
