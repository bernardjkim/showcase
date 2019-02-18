const BASE_URL = window._env_.API_URL; // eslint-disable-line no-underscore-dangle
const ARTICLE_URL = `${BASE_URL}/api/article`;

export default {
  create: `${ARTICLE_URL}/`,
  getAll: `${ARTICLE_URL}/`,
  getOne: id => `${ARTICLE_URL}/${id}`,
  search: q => `${ARTICLE_URL}/search?q=${q}`, // TODO: offset
};
