/*
 *
 * SubmissionPage actions
 *
 */

import {
  Form,
  Error,
  CLEAR_STATE,
  SUBMIT_FORM,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_SUCCESS,
  SubmissionActionTypes,
} from './types';

export function clearState(): SubmissionActionTypes {
  return {
    type: CLEAR_STATE,
  };
}

export function submitForm(form: Form): SubmissionActionTypes {
  return {
    type: SUBMIT_FORM,
    form,
  };
}

export function submitFormSuccess(): SubmissionActionTypes {
  return {
    type: SUBMIT_FORM_SUCCESS,
  };
}

export function submitFormError(error: Error): SubmissionActionTypes {
  return {
    type: SUBMIT_FORM_ERROR,
    error,
  };
}
