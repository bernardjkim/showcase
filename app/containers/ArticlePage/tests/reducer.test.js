import { fromJS } from 'immutable';
import articlePageReducer from '../reducer';

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

describe('articlePageReducer', () => {
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
        likes: 1,
        likedByUser: false,
      },
    });
  });

  it('returns the initial state', () => {
    expect(articlePageReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the createComment action', () => {
    expect(articlePageReducer(state, createComment({}))).toMatchSnapshot();
  });

  it('handles the createCommentSuccess action', () => {
    expect(
      articlePageReducer(state, createCommentSuccess({})),
    ).toMatchSnapshot();
  });

  it('handles the createCommentError action', () => {
    expect(articlePageReducer(state, createCommentError({}))).toMatchSnapshot();
  });

  it('handles the likeArticle action', () => {
    expect(articlePageReducer(state, likeArticle())).toMatchSnapshot();
  });

  it('handles the likeArticleSuccess action', () => {
    expect(articlePageReducer(state, likeArticleSuccess())).toMatchSnapshot();
  });

  it('handles the likeArticleError action', () => {
    expect(articlePageReducer(state, likeArticleError({}))).toMatchSnapshot();
  });

  it('handles the loadArticle action', () => {
    expect(articlePageReducer(state, loadArticle())).toMatchSnapshot();
  });

  it('handles the loadArticleSuccess action', () => {
    expect(articlePageReducer(state, loadArticleSuccess({}))).toMatchSnapshot();
  });

  it('handles the loadArticleError action', () => {
    expect(articlePageReducer(state, loadArticleError({}))).toMatchSnapshot();
  });

  it('handles the loadComments action', () => {
    expect(articlePageReducer(state, loadComments())).toMatchSnapshot();
  });

  it('handles the loadCommentsSuccess action', () => {
    expect(
      articlePageReducer(state, loadCommentsSuccess([])),
    ).toMatchSnapshot();
  });

  it('handles the loadCommentsError action', () => {
    expect(articlePageReducer(state, loadCommentsError({}))).toMatchSnapshot();
  });
});
