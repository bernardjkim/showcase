/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { all, takeLatest, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import {
  CREATE_COMMENT,
  LIKE_ARTICLE,
  LOAD_ARTICLE,
  LOAD_COMMENTS,
} from '../constants';
import {
  createCommentSuccess,
  createCommentError,
  likeArticleError,
  likeArticleSuccess,
  loadArticleError,
  loadArticleSuccess,
  loadCommentsError,
  loadCommentsSuccess,
} from '../actions';
import homePageSaga, {
  createComment,
  likeArticle,
  loadArticle,
  loadComments,
} from '../saga';

const state = fromJS({
  loading: false,
  error: false,
  article: {
    _id: '5c4ebe9be5346639c09786e3',
    title: 'google',
    uri: 'https://google.com',
    github: '',
    description: 'Search Engine',
    image: '1548552844157-Screen Shot 2019-01-26 at 5.32.10 PM.png',
    comments: [],
    likes: 1,
  },
});

describe('createComment Saga', () => {
  const gen = cloneableGenerator(createComment)({});

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(state.get('article')).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the createCommentSuccess action if successful', () => {
    const comment = {};
    const putDescriptor = gen.clone().next({ comment }).value;
    expect(putDescriptor).toEqual(put(createCommentSuccess(comment)));
  });

  it('should dispatch the createCommentError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(createCommentError(error)));
  });
});

describe('likeArticle Saga', () => {
  const gen = cloneableGenerator(likeArticle)();

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(state.get('article')).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the likeArticleSuccess action if successful', () => {
    const putDescriptor = gen.clone().next().value;
    expect(putDescriptor).toEqual(put(likeArticleSuccess()));
  });

  it('should dispatch the likeArticleError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(likeArticleError(error)));
  });
});

describe('loadArticle Saga', () => {
  const gen = cloneableGenerator(loadArticle)();

  // const selectDescriptor = gen.next().value;
  // expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadArticleSuccess action if successful', () => {
    const article = {};
    const putDescriptor = gen.clone().next({ article }).value;
    expect(putDescriptor).toEqual(put(loadArticleSuccess(article)));
  });

  it('should dispatch the loadArticleError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(loadArticleError(error)));
  });
});

describe('loadComments Saga', () => {
  const gen = cloneableGenerator(loadComments)();

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  const callDescriptor = gen.next(state.get('article')).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadCommentsSuccess action if successful', () => {
    const comments = [];
    const putDescriptor = gen.clone().next({ comments }).value;
    expect(putDescriptor).toEqual(put(loadCommentsSuccess(comments)));
  });

  it('should dispatch the likeCommentsError action if error', () => {
    const error = new Error('Test error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(loadCommentsError(error)));
  });
});

describe('homePageSaga Saga', () => {
  const saga = homePageSaga();

  it('should start task to watch for api request action', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([
        takeLatest(CREATE_COMMENT, createComment),
        takeLatest(LIKE_ARTICLE, likeArticle),
        takeLatest(LOAD_ARTICLE, loadArticle),
        takeLatest(LOAD_COMMENTS, loadComments),
      ]),
    );
  });
});
