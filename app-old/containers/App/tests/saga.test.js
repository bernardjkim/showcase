/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, all, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import AppSaga, { deleteToken, loadUser } from '../saga';
import { DELETE_TOKEN, LOAD_USER } from '../constants';
import {
  deleteTokenError,
  deleteTokenSuccess,
  loadUserError,
  loadUserSuccess,
} from '../actions';

describe('deleteToken Saga', () => {
  const gen = cloneableGenerator(deleteToken)();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the deleteTokenSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(deleteTokenSuccess()));
  });

  it('should dispatch the deleteTokenError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
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
    const user = 'user';
    const putDescriptor = gen.clone().next({ user }).value;
    expect(putDescriptor).toEqual(put(loadUserSuccess(user)));
  });

  it('should dispatch the loadUserError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(loadUserError(error)));
  });
});

describe('AppSaga Saga', () => {
  const saga = AppSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([
        takeLatest(DELETE_TOKEN, deleteToken),
        takeLatest(LOAD_USER, loadUser),
      ]),
    );
  });
});