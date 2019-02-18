const BASE_URL = '/api';
const ARTICLE_URL = `${BASE_URL}/article`;
const AUTH_URL = `${BASE_URL}/auth`;
const COMMENT_URL = `${BASE_URL}/comment`;
const LIKE_URL = `${BASE_URL}/like`;
const USER_URL = `${BASE_URL}/user`;

export default {
  /** Article Endpoints */
  article: {
    create: `${ARTICLE_URL}`,
    getAll: `${ARTICLE_URL}`,
    getOne: id => `${ARTICLE_URL}/${id}`,
    search: q => `${ARTICLE_URL}/search?q=${q}`, // TODO: add offset
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
