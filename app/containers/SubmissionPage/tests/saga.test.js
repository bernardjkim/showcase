/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, all, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import submissionPageSaga, { submitForm } from '../saga';
import { SUBMIT_FORM } from '../constants';
import { submitFormSuccess, submitFormError } from '../actions';

describe('submitForm Saga', () => {
  const form = {
    title: 'title',
    url: 'url',
    github: 'github',
    description: 'description',
    tags: 'tags',
    screenshot: 'screenshot',
  };
  const gen = cloneableGenerator(submitForm)({ form });

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the submitFormSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(submitFormSuccess()));
  });

  it('should dispatch the submitFormError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(submitFormError(error)));
  });
});

describe('submissionPageSaga Saga', () => {
  const saga = submissionPageSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(SUBMIT_FORM, submitForm)]),
    );
  });
});
