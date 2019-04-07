// =============================================================================
//  STATE
// =============================================================================
export interface Form {
  screenshot: Blob;
}
export interface Error {}

export interface SubmissionState {
  loading: boolean;
  error: boolean | Error;
  submissionSuccess: boolean;
}

// =============================================================================
//  ACTIONS
// =============================================================================
export const CLEAR_STATE = 'app/SubmissionPage/CLEAR_STATE';

export const SUBMIT_FORM = 'app/SubmissionPage/SUBMIT_FORM';
export const SUBMIT_FORM_SUCCESS = 'app/SubmissionPage/SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_ERROR = 'app/SubbmissionPage/SUBMIT_FORM_ERROR';

export interface ClearStateAction {
  type: typeof CLEAR_STATE;
}

export interface SubmitFormAction {
  type: typeof SUBMIT_FORM;
  form: Form;
}

export interface SubmitFormSuccessAction {
  type: typeof SUBMIT_FORM_SUCCESS;
}

export interface SubmitFormErrorAction {
  type: typeof SUBMIT_FORM_ERROR;
  error: Error;
}

export type SubmissionActionTypes =
  | ClearStateAction
  | SubmitFormAction
  | SubmitFormErrorAction
  | SubmitFormSuccessAction;
