const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  MONGOOSE_DEBUG: Joi.boolean().when(process.env.NODE_ENV, {
    is: Joi.string().equal('development'),
    then: Joi.boolean().default(true),
    otherwise: Joi.boolean().default(false),
  }),
  JWT_SECRET: Joi.string()
    .required()
    .description('JWT Secret required to sign'),
  COOKIE_PARSER_SECRET: Joi.string()
    .required()
    .description('Cookie Parser Secret required to sign'),
  MONGO_HOST: Joi.string()
    .required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number().default(27017),
  AWS_ACCESS_KEY_ID: Joi.string()
    .required()
    .description('AWS access key id'),
  AWS_SECRET_ACCESS_KEY: Joi.string()
    .required()
    .description('AWS secret access key'),
  S3_BUCKET: Joi.string()
    .required()
    .description('S3 bucket name'),
})
  .unknown()
  .required();

const { err, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (err) throw new Error(`Config validation error: ${err.message}`);

const config = {
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
  },
  aws: {
    id: envVars.AWS_ACCESS_KEY_ID,
    key: envVars.AWS_SECRET_ACCESS_KEY,
    bucket: envVars.S3_BUCKET,
  },
  cookieSecret: envVars.COOKIE_PARSER_SECRET,
};

module.exports = config;
