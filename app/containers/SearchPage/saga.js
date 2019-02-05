import { all, takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_ARTICLES } from './constants';
import request from '../../utils/request';
import { loadArticlesSuccess, loadArticlesError } from './actions';

// Individual exports for testing

export function* loadArticles(action) {
  const { q } = action.query;

  const url = `/api/article/search?q=${q}`;

  try {
    const res = yield call(request, url);

    yield put(loadArticlesSuccess(res.articles));
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
