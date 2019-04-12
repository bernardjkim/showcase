/*
 *
 * HomePage reducer
 *
 */

import {
  HomeState,
  HomeActionTypes,
  CLEAR_STATE,
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
  LOAD_NEXT,
  LOAD_NEXT_SUCCESS,
  LOAD_NEXT_ERROR,
} from './types';

export const initialState: HomeState = {
  loading: false,
  error: undefined,
  articles: [],
  offset: 0,
};

function homePageReducer(
  state: HomeState = initialState,
  action: HomeActionTypes,
) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState;

    case LOAD_NEXT:
      return {
        ...state,
        loading: true,
        error: undefined,
      };

    case LOAD_NEXT_SUCCESS:
      return {
        ...state,
        articles: state.articles.concat(action.articles),
        offset: state.offset + action.articles.length,
        loading: false,
      };

    case LOAD_NEXT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case LOAD_ARTICLES_ALL:
      return {
        ...state,
        articles: [],
        loading: true,
        error: undefined,
      };

    case LOAD_ARTICLES_ALL_SUCCESS:
      return {
        ...state,
        articles: state.articles.concat(action.articles),
        offset: action.articles.length,
        loading: false,
      };

    case LOAD_ARTICLES_ALL_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}

export default homePageReducer;
