import { fromJS } from 'immutable';
import submissionPageReducer from '../reducer';

import { submitForm, submitFormError, submitFormSuccess } from '../actions';

describe('submissionPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      submissionSuccess: false,
    });
  });
  it('returns the initial state', () => {
    expect(submissionPageReducer(undefined, {})).toMatchSnapshot();
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
