// import { fromJS } from 'immutable';
import submissionPageReducer, { initialState } from '../reducer';

import {
  submitForm,
  submitFormError,
  submitFormSuccess,
  clearState,
} from '../actions';

describe('submissionPageReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('returns the initial state', () => {
    expect(submissionPageReducer(state, {})).toMatchSnapshot();
  });

  it('handle the clear state action', () => {
    expect(submissionPageReducer(state, clearState())).toMatchSnapshot();
  });

  it('handle the submit form action', () => {
    expect(submissionPageReducer(state, submitForm({}))).toMatchSnapshot();
  });

  it('handle the submit form success action', () => {
    expect(submissionPageReducer(state, submitFormSuccess())).toMatchSnapshot();
  });

  it('handle the submit form error action', () => {
    expect(submissionPageReducer(state, submitFormError({}))).toMatchSnapshot();
  });
});
