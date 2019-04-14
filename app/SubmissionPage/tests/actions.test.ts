import { clearState, submitForm, submitFormError, submitFormSuccess } from '../actions';
import { CLEAR_STATE, SUBMIT_FORM, SUBMIT_FORM_ERROR, SUBMIT_FORM_SUCCESS } from '../types';

const form = {
  title: 'title',
  uri: 'uri',
  github: 'github',
  description: 'description',
  tags: [],
  screenshot: undefined,
};
describe('SubmissionPage actions', () => {
  describe('Clear State Action', () => {
    it('has a type of CLEAR_STATE', () => {
      const expected = {
        type: CLEAR_STATE,
      };
      expect(clearState()).toEqual(expected);
    });
  });
  describe('Submit Form Action', () => {
    it('has a type of SUBMIT_FORM', () => {
      const expected = {
        type: SUBMIT_FORM,
        form,
      };
      expect(submitForm(form)).toEqual(expected);
    });
  });

  describe('Submit Form Success Action', () => {
    it('has a type of SUBMIT_FORM_SUCCESS', () => {
      const expected = {
        type: SUBMIT_FORM_SUCCESS,
      };
      expect(submitFormSuccess()).toEqual(expected);
    });
  });

  describe('Submit Form Error Action', () => {
    it('has a type of SUBMIT_FORM_ERROR', () => {
      const error = {};
      const expected = {
        type: SUBMIT_FORM_ERROR,
        error,
      };
      expect(submitFormError(error)).toEqual(expected);
    });
  });
});
