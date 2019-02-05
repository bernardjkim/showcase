import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import qs from 'qs';

import { urlGetArticle, urlLikeArticle } from '../../api';
import request from '../../utils/request';
import {
  createCommentSuccess,
  createCommentError,
  likeArticleSuccess,
  likeArticleError,
  loadArticleSuccess,
  loadArticleError,
  loadComments as loadCommentsAction,
  loadCommentsSuccess,
  loadCommentsError,
} from './actions';
import {
  CREATE_COMMENT,
  LIKE_ARTICLE,
  LOAD_ARTICLE,
  LOAD_COMMENTS,
} from './constants';
import { makeSelectArticle } from './selectors';

// Individual exports for testing

/**
 * POST comment request/response handler
 */
export function* createComment(action) {
  const article = yield select(makeSelectArticle());

  const url = '/api/comment';

  // set request method/header/body
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({
      articleId: article.get('_id'),
      value: action.comment,
    }), // eslint-disable-line no-underscore-dangle
  };

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, url, options);

    yield put(createCommentSuccess(res.comment));
  } catch (err) {
    yield put(createCommentError(err));
  }
}

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
    body: qs.stringify({ articleId: article.get('_id') }), // eslint-disable-line no-underscore-dangle
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
export function* loadArticle(action) {
  const { id } = action.query;

  // get url to get article
  const url = `/api/article/${id}`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, url);

    yield put(loadArticleSuccess(res.article));
    yield put(loadCommentsAction());
  } catch (err) {
    yield put(loadArticleError(err));
  }
}

/**
 * GET comments for article request/response handler
 */
export function* loadComments() {
  const article = yield select(makeSelectArticle());

  const url = `/api/comment/${article.get('_id')}`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, url);
    yield put(loadCommentsSuccess(res.comments));
  } catch (err) {
    yield put(loadCommentsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* articlePageSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(CREATE_COMMENT, createComment),
    takeLatest(LIKE_ARTICLE, likeArticle),
    takeLatest(LOAD_ARTICLE, loadArticle),
    takeLatest(LOAD_COMMENTS, loadComments),
  ]);
}
