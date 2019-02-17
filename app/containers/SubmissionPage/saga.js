import { all, takeLatest, call, put } from 'redux-saga/effects';
import qs from 'qs';

import api from '../../api';
import request from '../../utils/request';

import { submitFormSuccess, submitFormError } from './actions';
import { SUBMIT_FORM } from './constants';

// Individual exports for testing

/**
 * POST article request/response handler
 */
export function* submitForm(action) {
  const url = api.article.create;

  const { form } = action;

  const formData = new FormData();
  formData.append('form', qs.stringify(form));
  formData.append('file', form.screenshot);

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
