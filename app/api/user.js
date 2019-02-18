const BASE_URL = window._env_.API_URL; // eslint-disable-line no-underscore-dangle
const USER_URL = `${BASE_URL}/api/user`;

export default {
  create: `${USER_URL}/`,
  getCurrent: `${USER_URL}/current`,
  getOne: id => `${USER_URL}/${id}`,
};
