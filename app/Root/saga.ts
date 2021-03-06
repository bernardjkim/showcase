import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'api';
import request from 'utils/request';

import { deleteTokenError, deleteTokenSuccess, loadUserError, loadUserSuccess } from './actions';
import { DELETE_TOKEN, LOAD_USER } from './types';

// Individual exports for testing

/**
 * DELETE token request/response handler
 */
export function* deleteToken() {
  const url = api.auth.logout;

  // set request method/header/body
  const options = {
    method: 'DELETE',
    credentials: 'same-origin', // include, *same-origin, omit
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, url, options);

    yield put(deleteTokenSuccess());
    window.location.reload(); // refresh page on logout
  } catch (err) {
    yield put(deleteTokenError(err));
  }
}

/**
 * GET user request/response handler
 */
export function* loadUser() {
  const url = api.user.getCurrent;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, url);

    yield put(loadUserSuccess(res.user || false));
  } catch (err) {
    yield put(loadUserError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* AppSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(DELETE_TOKEN, deleteToken), takeLatest(LOAD_USER, loadUser)]);
}
