import { all, takeLatest, call, put } from 'redux-saga/effects';
import qs from 'qs';

import { createToken } from 'containers/App/actions';

import request from '../../utils/request';

import { CREATE_USER } from './constants';
import { createUserSuccess, createUserError } from './actions';

/**
 * POST user request/response handler
 */
export function* createUser(action) {
  const url = '/api/user';

  // set request method/header/body
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({
      username: action.username,
      email: action.email,
      password: action.password,
      passwordConfirm: action.passwordConfirm,
    }),
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, url, options);

    yield put(createUserSuccess());
    yield put(createToken(action.email, action.password));
  } catch (err) {
    yield put(createUserError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* AuthPageSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(CREATE_USER, createUser)]);
}
