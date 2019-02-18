const BASE_URL = window._env_.API_URL; // eslint-disable-line no-underscore-dangle
const LIKE_URL = `${BASE_URL}/api/like`;

export default {
  getAll: `${LIKE_URL}/`,
  create: `${LIKE_URL}/`,
  getOne: id => `${LIKE_URL}/${id}`,
};
