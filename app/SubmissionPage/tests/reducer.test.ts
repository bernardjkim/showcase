import submissionPageReducer, { initialState } from '../reducer';

import { clearState, submitForm, submitFormError, submitFormSuccess } from '../actions';
import { SubmissionState } from '../types';

const form = {
  title: 'title',
  uri: 'uri',
  github: 'github',
  description: 'description',
  tags: [],
  screenshot: undefined,
};
describe('submissionPageReducer', () => {
  let state: SubmissionState;
  beforeEach(() => {
    state = initialState;
  });

  it('handle the clear state action', () => {
    expect(submissionPageReducer(state, clearState())).toMatchSnapshot();
  });

  it('handle the submit form action', () => {
    expect(submissionPageReducer(state, submitForm(form))).toMatchSnapshot();
  });

  it('handle the submit form success action', () => {
    expect(submissionPageReducer(state, submitFormSuccess())).toMatchSnapshot();
  });

  it('handle the submit form error action', () => {
    expect(submissionPageReducer(state, submitFormError({}))).toMatchSnapshot();
  });
});
