/*
 *
 * SubmissionPage actions
 *
 */

import {
  CLEAR_STATE,
  SUBMIT_FORM,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_SUCCESS,
} from './constants';

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}

export function submitForm(form) {
  return {
    type: SUBMIT_FORM,
    form,
  };
}

export function submitFormSuccess() {
  return {
    type: SUBMIT_FORM_SUCCESS,
  };
}

export function submitFormError(error) {
  return {
    type: SUBMIT_FORM_ERROR,
    error,
  };
}
