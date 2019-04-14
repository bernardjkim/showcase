/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { all, put, takeLatest } from 'redux-saga/effects';
import { submitForm as submitFormAction, submitFormError, submitFormSuccess } from '../actions';
import submissionPageSaga, { submitForm } from '../saga';
import { SubmitFormAction, SUBMIT_FORM } from '../types';

describe('submitForm Saga', () => {
  const form = {
    title: 'title',
    uri: 'uri',
    github: 'github',
    description: 'description',
    tags: [],
    screenshot: undefined,
  };
  const gen = cloneableGenerator(submitForm)(submitFormAction(form) as SubmitFormAction);

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(form).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the submitFormSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(submitFormSuccess()));
  });

  it('should dispatch the submitFormError action if error', () => {
    const error = new Error('Test error');
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(submitFormError(error)));
  });
});

describe('submissionPageSaga Saga', () => {
  const saga = submissionPageSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(all([takeLatest(SUBMIT_FORM, submitForm)]));
  });
});
