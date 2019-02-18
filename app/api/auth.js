const BASE_URL = window._env_.API_URL; // eslint-disable-line no-underscore-dangle
const AUTH_URL = `${BASE_URL}/api/auth`;

export default {
  login: `${AUTH_URL}/`,
  logout: `${AUTH_URL}/`,
};
