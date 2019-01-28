import { fromJS } from 'immutable';
import homePageReducer from '../reducer';

import {
  createComment,
  createCommentError,
  createCommentSuccess,
  likeArticle,
  likeArticleError,
  likeArticleSuccess,
  loadArticle,
  loadArticleError,
  loadArticleSuccess,
  loadComments,
  loadCommentsError,
  loadCommentsSuccess,
} from '../actions';

describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
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
    });
  });

  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the createComment action', () => {
    expect(homePageReducer(state, createComment({}))).toMatchSnapshot();
  });

  it('handles the createCommentSuccess action', () => {
    expect(homePageReducer(state, createCommentSuccess({}))).toMatchSnapshot();
  });

  it('handles the createCommentError action', () => {
    expect(homePageReducer(state, createCommentError({}))).toMatchSnapshot();
  });

  it('handles the likeArticle action', () => {
    expect(homePageReducer(state, likeArticle())).toMatchSnapshot();
  });

  it('handles the likeArticleSuccess action', () => {
    expect(homePageReducer(state, likeArticleSuccess())).toMatchSnapshot();
  });

  it('handles the likeArticleError action', () => {
    expect(homePageReducer(state, likeArticleError({}))).toMatchSnapshot();
  });

  it('handles the loadArticle action', () => {
    expect(homePageReducer(state, loadArticle())).toMatchSnapshot();
  });

  it('handles the loadArticleSuccess action', () => {
    expect(homePageReducer(state, loadArticleSuccess({}))).toMatchSnapshot();
  });

  it('handles the loadArticleError action', () => {
    expect(homePageReducer(state, loadArticleError({}))).toMatchSnapshot();
  });

  it('handles the loadComments action', () => {
    expect(homePageReducer(state, loadComments())).toMatchSnapshot();
  });

  it('handles the loadCommentsSuccess action', () => {
    expect(homePageReducer(state, loadCommentsSuccess({}))).toMatchSnapshot();
  });

  it('handles the loadCommentsError action', () => {
    expect(homePageReducer(state, loadCommentsError({}))).toMatchSnapshot();
  });
});
