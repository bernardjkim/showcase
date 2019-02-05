/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  articles: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES:
      return state.set('loading', true).set('error', false);

    case LOAD_ARTICLES_SUCCESS:
      return state
        .set('articles', fromJS(action.articles))
        .set('loading', false);

    case LOAD_ARTICLES_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    default:
      return state;
  }
}

export default searchPageReducer;
