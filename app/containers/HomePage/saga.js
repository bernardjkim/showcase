import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import qs from 'qs';

import { urlGetArticle, urlLikeArticle } from '../../api';
import request from '../../utils/request';
import {
  likeArticleSuccess,
  likeArticleError,
  loadArticleSuccess,
  loadArticleError,
} from './actions';
import { LIKE_ARTICLE, LOAD_ARTICLE } from './constants';
import { makeSelectArticle } from './selectors';

// Individual exports for testing

/**
 * POST like request/response handler
 */
export function* likeArticle() {
  const article = yield select(makeSelectArticle());

  // get url to like article
  const url = urlLikeArticle;

  // set request method/header/body
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({ articleId: article._id }), // eslint-disable-line no-underscore-dangle
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, url, options);

    yield put(likeArticleSuccess());
  } catch (err) {
    yield put(likeArticleError(err));
  }
}

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
  yield all([
    takeLatest(LOAD_ARTICLE, loadArticle),
    takeLatest(LIKE_ARTICLE, likeArticle),
  ]);
}
