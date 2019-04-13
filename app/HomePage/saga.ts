import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from 'api';
import request from 'utils/request';
import processSearchResults from 'utils/processSearchResults';
import { LOAD_ARTICLES_ALL, LOAD_NEXT } from './types';
import {
  loadArticlesAllSuccess,
  loadArticlesAllError,
  loadNextSuccess,
  loadNextError,
} from './actions';
import { makeSelectOffset, makeSelectSearch } from './selectors';

// Individual exports for testing

/**
 * GET articles all request/response handler
 */
export function* loadArticlesAll() {
  const search = yield select(makeSelectSearch());
  const offset = yield select(makeSelectOffset());
  const url = api.article.search(search, offset);

  try {
    const res = yield call(request, url);
    yield put(loadArticlesAllSuccess(processSearchResults(res)));
  } catch (err) {
    yield put(loadArticlesAllError(err));
  }
}

/**
 * GET articles next request/response handler
 */
export function* loadNext() {
  const search = yield select(makeSelectSearch());
  const offset = yield select(makeSelectOffset());
  // NOTE: prevent loadall & loadnext at the same time. Might want to think of a
  // better way to handle this later...
  if (offset <= 0) {
    return;
  }

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
export default function* homePageSaga() {
  yield all([
    takeLatest(LOAD_ARTICLES_ALL, loadArticlesAll),
    takeLatest(LOAD_NEXT, loadNext),
  ]);
}
