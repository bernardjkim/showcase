import { all, takeLatest, call, put } from 'redux-saga/effects';
import qs from 'qs';

import request from '../../utils/request';

import {
  createTokenSuccess,
  createTokenError,
  loadUser as loadUserAction,
  loadUserSuccess,
  loadUserError,
} from './actions';
import { CREATE_TOKEN, DELETE_TOKEN, LOAD_USER } from './constants';

// Individual exports for testing

/**
 * POST auth request/response handler
 */
export function* createToken(action) {
  const url = '/api/auth';

  // set request method/header/body
  const options = {
    method: 'POST',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({
      email: action.email,
      password: action.password,
    }), // eslint-disable-line no-underscore-dangle
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, url, options);

    yield put(createTokenSuccess());
    yield put(loadUserAction());
  } catch (err) {
    yield put(createTokenError(err));
  }
}

/**
 * DELETE token request/response handler
 */
export function* deleteToken() {
  // TODO: need to delete cookie
  yield put(loadUserAction());

  // TODO: blacklist token on serverside???

  // const token = yield select(makeSelectToken());
  // const url = '/api/auth';

  // // set request method/header/body
  // const options = {
  //   method: 'DELETE',
  //   headers: { Authorization: token },
  // };

  // try {
  //   yield call(request, url, options);

  //   localStorage.removeItem('jwtToken');
  //   yield put(deleteTokenSuccess());
  //   yield put(loadUserAction());
  // } catch (err) {
  //   yield put(deleteTokenError(err));
  // }
}

/**
 * GET user request/response handler
 */
export function* loadUser() {
  const url = '/api/user/current';

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, url);

    yield put(loadUserSuccess(res.user));
  } catch (err) {
    yield put(loadUserError(err));
  }
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
    takeLatest(DELETE_TOKEN, deleteToken),
    takeLatest(LOAD_USER, loadUser),
  ]);
}
