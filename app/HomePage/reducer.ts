/*
 *
 * HomePage reducer
 *
 */

import {
  CLEAR_STATE,
  HomeActionTypes,
  HomeState,
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
  LOAD_NEXT,
  LOAD_NEXT_ERROR,
  LOAD_NEXT_SUCCESS,
  REFRESH,
  SET_SEARCH,
  SET_SORT,
} from './types';

export const initialState: HomeState = {
  loading: false,
  error: undefined,
  articles: [],
  offset: 0,
  tags: [],
  sort: 'new',
};

function homePageReducer(state: HomeState = initialState, action: HomeActionTypes) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState;

    case REFRESH:
      return { ...state, offset: 0, tags: [...state.tags] };

    case SET_SEARCH:
      return {
        ...state,
        offset: 0,
        tags: action.search ? action.search : [],
      };

    case SET_SORT:
      return {
        ...state,
        offset: 0,
        sort: action.sort,
      };

    case LOAD_NEXT:
      return { ...state, loading: true, error: undefined };

    case LOAD_NEXT_SUCCESS:
      return {
        ...state,
        articles: state.articles.concat(action.articles),
        offset: state.offset + action.articles.length,
        loading: false,
      };

    case LOAD_NEXT_ERROR:
      return { ...state, error: action.error, loading: false };

    case LOAD_ARTICLES_ALL:
      return { ...state, articles: [], loading: true, error: undefined };

    case LOAD_ARTICLES_ALL_SUCCESS:
      return {
        ...state,
        articles: state.articles.concat(action.articles),
        offset: action.articles.length,
        loading: false,
      };

    case LOAD_ARTICLES_ALL_ERROR:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}

export default homePageReducer;
