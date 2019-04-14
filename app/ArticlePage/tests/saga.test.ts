/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
  createComment as createCommentAction,
  createCommentError,
  createCommentSuccess,
  likeArticleError,
  likeArticleSuccess,
  loadArticle as loadArticleAction,
  loadArticleError,
  loadArticleSuccess,
  loadCommentsError,
  loadCommentsSuccess,
  loadLikesError,
  loadLikesSuccess,
} from '../actions';
import { initialState } from '../reducer';
import articlePageSaga, { createComment, likeArticle, loadArticle, loadComments, loadLikes } from '../saga';
import {
  ArticleState,
  Comment,
  CreateCommentAction,
  CREATE_COMMENT,
  Like,
  LoadArticleAction,
  LIKE_ARTICLE,
  LOAD_ARTICLE,
  LOAD_COMMENTS,
  LOAD_LIKES,
} from '../types';

const state: ArticleState = initialState;

const article = {
  _id: '_id',
  title: 'title',
  uri: 'uri',
  github: 'github',
  description: 'description',
  tags: [],
  image: 'image',
};
const comments: Comment[] = [];
const likes: Like[] = [];
const error = new Error('Test Error');

state.article = article;

describe('createComment Saga', () => {
  const comment: Comment = {};
  const gen = cloneableGenerator(createComment)(createCommentAction(comment) as CreateCommentAction);

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(state.article).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the createCommentSuccess action if successful', () => {
    const putDescriptor = gen.clone().next({ comment }).value;
    expect(putDescriptor).toEqual(put(createCommentSuccess(comment)));
  });

  it('should dispatch the createCommentError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(createCommentError(error)));
  });
});

describe('likeArticle Saga', () => {
  const like = {};
  const gen = cloneableGenerator(likeArticle)();

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(state.article).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the likeArticleSuccess action if successful', () => {
    const putDescriptor = gen.clone().next({ like }).value;
    expect(putDescriptor).toEqual(put(likeArticleSuccess(like)));
  });

  it('should dispatch the likeArticleError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(likeArticleError(error)));
  });
});

describe('loadArticle Saga', () => {
  const query = { id: 'id' };
  const gen = cloneableGenerator(loadArticle)(loadArticleAction(query) as LoadArticleAction);

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadArticleSuccess action if successful', () => {
    const putDescriptor = gen.clone().next({ article }).value;
    expect(putDescriptor).toEqual(put(loadArticleSuccess(article)));
  });

  it('should dispatch the loadArticleError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(loadArticleError(error)));
  });
});

describe('loadComments Saga', () => {
  const gen = cloneableGenerator(loadComments)();

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(state.article).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadCommentsSuccess action if successful', () => {
    const putDescriptor = gen.clone().next({ comments }).value;
    expect(putDescriptor).toEqual(put(loadCommentsSuccess(comments)));
  });

  it('should dispatch the loadCommentsError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(loadCommentsError(error)));
  });
});

describe('loadLikes Saga', () => {
  const gen = cloneableGenerator(loadLikes)();

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(state.article).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadLikesSuccess action if successful', () => {
    const putDescriptor = gen.clone().next({ likes }).value;
    expect(putDescriptor).toEqual(put(loadLikesSuccess(likes)));
  });

  it('should dispatch the loadLikesError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(loadLikesError(error)));
  });
});

describe('articlePageSaga Saga', () => {
  const saga = articlePageSaga();

  it('should start task to watch for api request action', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([
        takeLatest(CREATE_COMMENT, createComment),
        takeLatest(LIKE_ARTICLE, likeArticle),
        takeLatest(LOAD_ARTICLE, loadArticle),
        takeLatest(LOAD_COMMENTS, loadComments),
        takeLatest(LOAD_LIKES, loadLikes),
      ]),
    );
  });
});
