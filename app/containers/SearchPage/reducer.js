/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLEAR_STATE,
  SET_SEARCH,
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
  LOAD_NEXT,
  LOAD_NEXT_ERROR,
  LOAD_NEXT_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  articles: [],
  search: '',
  offset: 0,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState;

    case SET_SEARCH:
      return state.set('search', action.search);

    case LOAD_ARTICLES:
      return state
        .set('articles', fromJS([]))
        .set('offset', 0)
        .set('loading', true)
        .set('error', false);

    case LOAD_ARTICLES_SUCCESS:
      return state
        .set('articles', fromJS(action.articles))
        .set('offset', action.articles.length)
        .set('loading', false);

    case LOAD_ARTICLES_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    case LOAD_NEXT:
      return state.set('loading', true).set('error', false);

    case LOAD_NEXT_SUCCESS:
      return state
        .update('articles', articles =>
          articles.concat(fromJS(action.articles)),
        )
        .update('offset', val => val + action.articles.length)
        .set('loading', false);

    case LOAD_NEXT_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    default:
      return state;
  }
}

export default searchPageReducer;
