/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { all, takeLatest } from 'redux-saga/effects';

import {
  CREATE_COMMENT,
  // CREATE_COMMENT_ERROR,
  // CREATE_COMMENT_SUCCESS,
  LIKE_ARTICLE,
  // LIKE_ARTICLE_ERROR,
  // LIKE_ARTICLE_SUCCESS,
  LOAD_ARTICLE,
  // LOAD_ARTICLE_ERROR,
  // LOAD_ARTICLE_SUCCESS,
  LOAD_COMMENTS,
  // LOAD_COMMENTS_ERROR,
  // LOAD_COMMENTS_SUCCESS,
} from '../constants';
import // createComment,
// createCommentError,
// createCommentSuccess,
// likeArticle,
// likeArticleError,
// likeArticleSuccess,
// loadArticle,
// loadArticleError,
// loadArticleSuccess,
// loadComments,
// loadCommentsError,
// loadCommentsSuccess,
'../actions';
import homePageSaga, {
  createComment,
  likeArticle,
  loadArticle,
  loadComments,
} from '../saga';

// const generator = homePageSaga();
// We have to test twice, once for a successful load and once for an unsuccessful one
// so we do all the stuff that happens beforehand automatically in the beforeEach
// beforeEach(() => {
//   getHomePageSagaGenerator = get();

//   const selectDescriptor = getReposGenerator.next().value;
//   expect(selectDescriptor).toMatchSnapshot();

//   const callDescriptor = getReposGenerator.next(username).value;
//   expect(callDescriptor).toMatchSnapshot();
// });

const state = {
  loading: false,
  error: false,
  article: {
    title: 'google',
    uri: 'https://google.com',
    github: '',
    description: 'Search Engine',
    image: '1548552844157-Screen Shot 2019-01-26 at 5.32.10 PM.png',
    comments: [],
  },
};

describe('createComment Saga', () => {
  let createCommentGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    createCommentGenerator = createComment();

    const selectArticle = createCommentGenerator.next().value;
    expect(selectArticle).toMatchSnapshot();

    const callDescriptor = createCommentGenerator.next(state.article).value;
    expect(callDescriptor).toMatchSnapshot();
    console.log('select>>>>>>', selectArticle);
    console.log('call>>>>>>>>>', callDescriptor);
  });

  // it('', () => {
  //   const response = [
  //     {
  //       name: 'First repo',
  //     },
  //     {
  //       name: 'Second repo',
  //     },
  //   ];
  //   const putDescriptor = getReposGenerator.next(response).value;
  //   expect(putDescriptor).toEqual(put(reposLoaded(response, username)));
  // });
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
