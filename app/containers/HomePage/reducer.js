/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  articles: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES_ALL:
      return state
        .set('articles', false)
        .set('loading', true)
        .set('error', false);

    case LOAD_ARTICLES_ALL_SUCCESS:
      return state
        .set('articles', fromJS(action.articles))
        .set('loading', false);

    case LOAD_ARTICLES_ALL_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);
    default:
      return state;
  }
}

export default homePageReducer;
