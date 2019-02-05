/*
 *
 * SubmissionPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SUBMIT_FORM,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  submissionSuccess: false,
});

function submissionPageReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return state
        .set('submissionSuccess', false)
        .set('loading', true)
        .set('error', false);

    case SUBMIT_FORM_SUCCESS:
      return state.set('submissionSuccess', true).set('loading', false);

    case SUBMIT_FORM_ERROR:
      return state
        .set('submissionSuccess', false)
        .set('error', fromJS(action.error))
        .set('loading', false);

    default:
      return state;
  }
}

export default submissionPageReducer;
