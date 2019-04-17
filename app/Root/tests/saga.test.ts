/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { all, put, takeLatest } from 'redux-saga/effects';
import { deleteTokenError, deleteTokenSuccess, loadUserError, loadUserSuccess } from '../actions';
import AppSaga, { deleteToken, loadUser } from '../saga';
import { DELETE_TOKEN, LOAD_USER } from '../types';

const user = { _id: '_id', username: 'username', email: 'email', updated: new Date('April 16, 2019 20:32:00') };
const error = new Error('Test error');

describe('deleteToken Saga', () => {
  const gen = cloneableGenerator(deleteToken)();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the deleteTokenSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(deleteTokenSuccess()));
  });

  it('should dispatch the deleteTokenError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(deleteTokenError(error)));
  });
});

describe('loadUser Saga', () => {
  const gen = cloneableGenerator(loadUser)();

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadUserSuccess action if successful', () => {
    const putDescriptor = gen.clone().next({ user }).value;
    expect(putDescriptor).toEqual(put(loadUserSuccess(user)));
  });

  it('should dispatch the loadUserError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(loadUserError(error)));
  });
});

describe('AppSaga Saga', () => {
  const saga = AppSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(all([takeLatest(DELETE_TOKEN, deleteToken), takeLatest(LOAD_USER, loadUser)]));
  });
});
