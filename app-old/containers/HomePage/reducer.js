/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLEAR_STATE,
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
  LOAD_NEXT,
  LOAD_NEXT_SUCCESS,
  LOAD_NEXT_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  articles: [],
  offset: 0,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState;

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

    case LOAD_ARTICLES_ALL:
      return state
        .set('articles', fromJS([]))
        .set('loading', true)
        .set('error', false);

    case LOAD_ARTICLES_ALL_SUCCESS:
      return state
        .set('articles', fromJS(action.articles))
        .set('offset', action.articles.length)
        .set('loading', false);

    case LOAD_ARTICLES_ALL_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    default:
      return state;
  }
}

export default homePageReducer;
