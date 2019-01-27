import { all, takeLatest, call, put } from 'redux-saga/effects';

import { urlGetArticle } from '../../api';
import request from '../../utils/request';
import { loadArticleSuccess, loadArticleError } from './actions';
import { LOAD_ARTICLE } from './constants';

// Individual exports for testing

/**
 * GET article request/response handler
 */
export function* loadArticle() {
  // get url to get article
  const url = urlGetArticle;

  try {
    // Call our request helper (see 'utils/request')
    const article = yield call(request, url);

    yield put(loadArticleSuccess(article));
  } catch (err) {
    yield put(loadArticleError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(LOAD_ARTICLE, loadArticle)]);
}
