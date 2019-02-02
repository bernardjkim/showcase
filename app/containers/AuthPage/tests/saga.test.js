/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import { take, call, put, select } from 'redux-saga/effects';

/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, all, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import AuthPageSaga, { createUser } from '../saga';
import { CREATE_USER } from '../constants';
import { createUserError, createUserSuccess } from '../actions';

describe('createUser Saga', () => {
  const username = 'username';
  const email = 'email';
  const password = 'password';
  const passwordConfirm = 'password';
  const gen = cloneableGenerator(createUser)(
    username,
    email,
    password,
    passwordConfirm,
  );

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the createUserSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(createUserSuccess()));
  });

  it('should dispatch the createUserError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(createUserError(error)));
  });
});

describe('AuthPageSaga Saga', () => {
  const saga = AuthPageSaga();

  it('it should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(CREATE_USER, createUser)]),
    );
  });
});
