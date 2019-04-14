/*
 *
 * ArticlePage reducer
 *
 */

import {
  ArticleActionTypes,
  ArticleState,
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  LIKE_ARTICLE,
  LIKE_ARTICLE_ERROR,
  LIKE_ARTICLE_SUCCESS,
  LOAD_ARTICLE,
  LOAD_ARTICLE_ERROR,
  LOAD_ARTICLE_SUCCESS,
  LOAD_COMMENTS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_SUCCESS,
  LOAD_LIKES,
  LOAD_LIKES_ERROR,
  LOAD_LIKES_SUCCESS,
} from './types';

// The initial state of the App
export const initialState: ArticleState = {
  loading: false,
  error: undefined,
  article: undefined,
  comments: [],
  likes: [],
};

function articlePageReducer(state: ArticleState = initialState, action: ArticleActionTypes) {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, loading: true, error: undefined };

    case CREATE_COMMENT_SUCCESS:
      return { ...state, comments: state.comments.push(action.comment), loading: false };

    case CREATE_COMMENT_ERROR:
      return { ...state, loading: false, error: action.error };

    case LIKE_ARTICLE:
      return { ...state, loading: true, error: undefined };

    case LIKE_ARTICLE_SUCCESS:
      return { ...state, likes: state.likes.push(action.like), loading: false };

    case LIKE_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.error };

    case LOAD_ARTICLE:
      return { ...state, article: undefined, loading: true, error: undefined };

    case LOAD_ARTICLE_SUCCESS:
      return { ...state, article: action.article, loading: false };

    case LOAD_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.error };

    case LOAD_COMMENTS:
      return { ...state, loading: true, error: undefined };

    case LOAD_COMMENTS_SUCCESS:
      return { ...state, comments: action.comments, loading: false };

    case LOAD_COMMENTS_ERROR:
      return { ...state, loading: false, error: action.error };

    case LOAD_LIKES:
      return { ...state, loading: true, error: undefined };

    case LOAD_LIKES_SUCCESS:
      return { ...state, likes: action.likes, loading: false };

    case LOAD_LIKES_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}

export default articlePageReducer;
