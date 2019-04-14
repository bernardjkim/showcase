/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { all, put, takeLatest } from 'redux-saga/effects';
import {
  createToken as createTokenAction,
  createTokenError,
  createTokenSuccess,
  createUser as createUserAction,
  createUserError,
  createUserSuccess,
} from '../actions';
import AuthPageSaga, { createToken, createUser } from '../saga';
import { CreateTokenAction, CreateUserAction, CREATE_TOKEN, CREATE_USER } from '../types';

const error = new Error('Test error');

describe('createToken Saga', () => {
  const form = { email: 'email', password: 'password' };
  const gen = cloneableGenerator(createToken)(createTokenAction(form) as CreateTokenAction);

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the createTokenSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(createTokenSuccess()));
  });

  it('should dispatch the createTokenError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(createTokenError(error)));
  });
});

describe('createUser Saga', () => {
  const form = { username: 'username', email: 'email', password: 'password', passwordConfirm: 'password' };
  const gen = cloneableGenerator(createUser)(createUserAction(form) as CreateUserAction);

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the createUserSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(createUserSuccess()));
  });

  it('should dispatch the createUserError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(createUserError(error)));
  });
});

describe('AuthPageSaga Saga', () => {
  const saga = AuthPageSaga();

  it('it should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(CREATE_TOKEN, createToken), takeLatest(CREATE_USER, createUser)]),
    );
  });
});
