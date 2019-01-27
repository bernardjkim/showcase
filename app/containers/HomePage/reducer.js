/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LIKE_ARTICLE,
  LIKE_ARTICLE_ERROR,
  LIKE_ARTICLE_SUCCESS,
  LOAD_ARTICLE,
  LOAD_ARTICLE_ERROR,
  LOAD_ARTICLE_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  article: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LIKE_ARTICLE:
      return state.set('loading', true).set('error', false);

    case LIKE_ARTICLE_SUCCESS: {
      const article = state.get('article');
      article.likes += 1;
      return state.set('article', article).set('loading', false);
    }
    case LIKE_ARTICLE_ERROR:
      return state.set('error', action.error).set('loading', false);

    case LOAD_ARTICLE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('article', false);

    case LOAD_ARTICLE_SUCCESS:
      return state.set('article', action.article).set('loading', false);

    case LOAD_ARTICLE_ERROR:
      return state.set('error', action.error).set('loading', false);

    default:
      return state;
  }
}

export default homePageReducer;
