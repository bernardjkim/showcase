const BASE_URL = window._env_.API_URL; // eslint-disable-line no-underscore-dangle
const COMMENT_URL = `${BASE_URL}/api/comment`;

export default {
  create: `${COMMENT_URL}/`,
  get: id => `${COMMENT_URL}/${id}`,
};
