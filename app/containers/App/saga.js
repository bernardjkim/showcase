import { all, takeLatest, call, put } from 'redux-saga/effects';
import qs from 'qs';

import request from '../../utils/request';
import { createTokenSuccess, createTokenError } from './actions';
import { CREATE_TOKEN } from './constants';

// Individual exports for testing

/**
 * POST comment request/response handler
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

    yield put(createTokenSuccess(res.token));
  } catch (err) {
    yield put(createTokenError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(CREATE_TOKEN, createToken)]);
}
