/*
 *
 * SubmissionPage reducer
 *
 */

// import { fromJS } from 'immutable';
import {
  CLEAR_STATE,
  SubmissionActionTypes,
  SubmissionState,
  SUBMIT_FORM,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_SUCCESS,
} from './types';

export const initialState: SubmissionState = {
  loading: false,
  error: false,
  submissionSuccess: false,
};

function submissionPageReducer(
  state: SubmissionState = initialState,
  action: SubmissionActionTypes,
): SubmissionState {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        submissionSuccess: false,
        loading: true,
        error: false,
      };

    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        submissionSuccess: true,
        loading: false,
      };

    case SUBMIT_FORM_ERROR:
      return {
        ...state,
        submissionSuccess: false,
        error: action.error,
        loading: false,
      };

    case CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
}

export default submissionPageReducer;
