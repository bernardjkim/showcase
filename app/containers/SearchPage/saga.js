import { all, takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_ARTICLES } from './constants';
import { loadArticlesSuccess, loadArticlesError } from './actions';
import api from '../../api';
import request from '../../utils/request';
import processSearchResults from '../../utils/processSearchResults';

// Individual exports for testing

/**
 * GET articles query request/response handler
 */
export function* loadArticles(action) {
  const { q } = action.query;

  const url = api.article.search(q);

  try {
    const res = yield call(request, url);

    yield put(loadArticlesSuccess(processSearchResults(res)));
  } catch (err) {
    yield put(loadArticlesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* searchPageSaga() {
  yield all([takeLatest(LOAD_ARTICLES, loadArticles)]);
}
