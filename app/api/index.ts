import { API } from './types';

const BASE_URL = '/api';
const ARTICLE_URL = `${BASE_URL}/article`;
const AUTH_URL = `${BASE_URL}/auth`;
const COMMENT_URL = `${BASE_URL}/comment`;
const LIKE_URL = `${BASE_URL}/like`;
const USER_URL = `${BASE_URL}/user`;

export const api: API = {
  /** Article Endpoints */
  article: {
    create: `${ARTICLE_URL}`,
    getAll: offset => `${ARTICLE_URL}/all?offset=${offset}`,
    getOne: id => `${ARTICLE_URL}/${id}`,
    search: (term, offset, sort) => `${ARTICLE_URL}/search?term=${term}&offset=${offset}&sort=${sort}`,
  },

  /** Auth Endpoints */
  auth: {
    login: `${AUTH_URL}`,
    logout: `${AUTH_URL}`,
  },

  /** Comment Endpoints */
  comment: {
    create: `${COMMENT_URL}`,
    get: id => `${COMMENT_URL}/?article=${id}`,
  },

  /** Like Endpoints */
  like: {
    getAll: `${LIKE_URL}`,
    create: `${LIKE_URL}`,
    getByArticle: id => `${LIKE_URL}/?article=${id}`,
  },

  /** User Endpoints */
  user: {
    create: `${USER_URL}`,
    getCurrent: `${USER_URL}/current`,
    getOne: id => `${USER_URL}/${id}`,
  },
};

export default api;
