const env = window._env_; // eslint-disable-line no-underscore-dangle
const BASE_URL = env ? `${env.API_URL}/api` : 'http://<api-host>:<api-port>';
const ARTICLE_URL = `${BASE_URL}/api/article`;
const AUTH_URL = `${BASE_URL}/api/auth`;
const COMMENT_URL = `${BASE_URL}/api/comment`;
const LIKE_URL = `${BASE_URL}/api/like`;
const USER_URL = `${BASE_URL}/api/user`;

export default {
  /** Article Endpoints */
  article: {
    create: `${ARTICLE_URL}`,
    getAll: `${ARTICLE_URL}`,
    getOne: id => `${ARTICLE_URL}/${id}`,
    search: q => `${ARTICLE_URL}/search?q=${q}`, // TODO: offset
  },

  /** Auth Endpoints */
  auth: {
    login: `${AUTH_URL}`,
    logout: `${AUTH_URL}`,
  },

  /** Comment Endpoints */
  comment: {
    create: `${COMMENT_URL}`,
    get: id => `${COMMENT_URL}/${id}`,
  },

  /** Like Endpoints */
  like: {
    getAll: `${LIKE_URL}`,
    create: `${LIKE_URL}`,
    getOne: id => `${LIKE_URL}/${id}`,
  },

  /** User Endpoints */
  user: {
    create: `${USER_URL}`,
    getCurrent: `${USER_URL}/current`,
    getOne: id => `${USER_URL}/${id}`,
  },
};
