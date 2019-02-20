import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_ARTICLES, LOAD_NEXT } from './constants';
import {
  loadArticlesSuccess,
  loadArticlesError,
  loadNextError,
  loadNextSuccess,
} from './actions';
import { makeSelectOffset, makeSelectSearch } from './selectors';
import api from '../../api';
import request from '../../utils/request';
import processSearchResults from '../../utils/processSearchResults';

// Individual exports for testing

/**
 * GET articles query request/response handler
 */
export function* loadArticles() {
  const search = yield select(makeSelectSearch());
  const offset = yield select(makeSelectOffset());

  const url = api.article.search(search, offset);

  try {
    const res = yield call(request, url);

    yield put(loadArticlesSuccess(processSearchResults(res)));
  } catch (err) {
    yield put(loadArticlesError(err));
  }
}

/**
 * GET articles next request/response handler
 */
export function* loadNext() {
  const search = yield select(makeSelectSearch());
  const offset = yield select(makeSelectOffset());

  const url = api.article.search(search, offset);

  try {
    const res = yield call(request, url);

    yield put(loadNextSuccess(processSearchResults(res)));
  } catch (err) {
    yield put(loadNextError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* searchPageSaga() {
  yield all([
    takeLatest(LOAD_ARTICLES, loadArticles),
    takeLatest(LOAD_NEXT, loadNext),
  ]);
}
