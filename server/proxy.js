const proxy = require('http-proxy-middleware');

module.exports = function addProxy(app) {
  /** Proxy api server */
  app.use(proxy('/api', { target: process.env.API_URL }));
};
