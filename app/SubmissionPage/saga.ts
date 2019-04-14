import qs from 'qs';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'api/index';
import request from 'utils/request';

import { submitFormError, submitFormSuccess } from './actions';
import { SubmitFormAction, SUBMIT_FORM } from './types';

// Individual exports for testing

/**
 * POST article request/response handler
 */
export function* submitForm(action: SubmitFormAction) {
  const { screenshot, ...form } = action.form;
  if (!screenshot || !form) {
    return;
  }

  const formData = new FormData();
  formData.append('form', qs.stringify(form));
  formData.append('file', screenshot);

  const url = api.article.create;
  // set request method/header/body
  const options = {
    method: 'POST',
    // allow fetch to generate the full content type rather than set manually
    // https://github.com/github/fetch/issues/505
    // headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, url, options);

    yield put(submitFormSuccess());
  } catch (err) {
    yield put(submitFormError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* submissionPageSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(SUBMIT_FORM, submitForm)]);
}
