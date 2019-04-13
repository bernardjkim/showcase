import { all, takeLatest, call, put } from 'redux-saga/effects';
import qs from 'qs';

import { loadUser } from 'Root/actions';

import api from 'api';
import request from 'utils/request';

import {
  CreateTokenAction,
  CREATE_TOKEN,
  CREATE_USER,
  CreateUserAction,
} from './types';
import {
  createToken as createTokenAction,
  createTokenSuccess,
  createTokenError,
  createUserSuccess,
  createUserError,
} from './actions';

/**
 * POST auth request/response handler
 */
export function* createToken(action: CreateTokenAction) {
  const url = api.auth.login;

  // set request method/header/body
  const options = {
    method: 'POST',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify(action.form),
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, url, options);

    yield put(createTokenSuccess());
    yield put(loadUser());
  } catch (err) {
    yield put(createTokenError(err));
  }
}
/**
 * POST user request/response handler
 */
export function* createUser(action: CreateUserAction) {
  const url = api.user.create;

  // set request method/header/body
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify(action.form),
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, url, options);

    yield put(createUserSuccess());
    yield put(createTokenAction(action.form));
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

  yield all([
    takeLatest(CREATE_TOKEN, createToken),
    takeLatest(CREATE_USER, createUser),
  ]);
}
