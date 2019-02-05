import { all, takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_ARTICLES_ALL } from './constants';
import request from '../../utils/request';
import { loadArticlesAllSuccess, loadArticlesAllError } from './actions';

// Individual exports for testing

/**
 * GET articles all request/response handler
 */
export function* loadArticlesAll() {
  const url = `/api/article/all`;

  try {
    const res = yield call(request, url);

    yield put(loadArticlesAllSuccess(res.articles));
  } catch (err) {
    yield put(loadArticlesAllError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  yield all([takeLatest(LOAD_ARTICLES_ALL, loadArticlesAll)]);
}
