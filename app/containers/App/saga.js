import { all, takeLatest, call, put } from 'redux-saga/effects';
import qs from 'qs';

import request from '../../utils/request';
import {
  createTokenSuccess,
  createTokenError,
  loadUserSuccess,
  loadUserError,
} from './actions';
import { CREATE_TOKEN, LOAD_USER } from './constants';

// Individual exports for testing

/**
 * POST auth request/response handler
 */
export function* createToken(action) {
  const url = '/api/auth';

  // set request method/header/body
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({
      email: action.email,
      password: action.password,
    }), // eslint-disable-line no-underscore-dangle
  };

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, url, options);

    localStorage.setItem('jwtToken', res.token);

    yield put(createTokenSuccess(res.token));
  } catch (err) {
    yield put(createTokenError(err));
  }
}

/**
 * GET user request/response handler
 */
export function* loadUser() {
  const token = localStorage.getItem('jwtToken');
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(CREATE_TOKEN, createToken),
    takeLatest(LOAD_USER, loadUser),
  ]);
}
