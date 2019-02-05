/*
 *
 * ArticlePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
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
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  /**
   * article
   * @field {string}  _id         - Article id
   * @field {string}  uri         - Article uri
   * @field {string}  github      - GitHub repo
   * @field {string}  description - Article description
   * @field {string}  image       - Article image link
   * @field {number}  likes       - Number of likes
   * @field {bool}    likedByUser - Article is liked by user
   * @field {array}   comments    - Array of comments
   */
  article: false,
});

function articlePageReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return state.set('loading', true).set('error', false);

    case CREATE_COMMENT_SUCCESS:
      return state
        .updateIn(['article', 'comments'], comments =>
          comments.push(fromJS(action.comment)),
        )
        .set('loading', false);

    case CREATE_COMMENT_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    case LIKE_ARTICLE:
      return state.set('loading', true).set('error', false);

    case LIKE_ARTICLE_SUCCESS:
      return state
        .updateIn(['article', 'likes'], likes => likes + 1)
        .setIn(['article', 'likedByUser'], true)
        .set('loading', false);

    case LIKE_ARTICLE_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    case LOAD_ARTICLE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('article', false);

    case LOAD_ARTICLE_SUCCESS:
      return state.set('article', fromJS(action.article)).set('loading', false);

    case LOAD_ARTICLE_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    case LOAD_COMMENTS:
      return state.set('loading', true).set('error', false);

    case LOAD_COMMENTS_SUCCESS:
      return state.setIn(['article', 'comments'], fromJS(action.comments));

    case LOAD_COMMENTS_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    default:
      return state;
  }
}

export default articlePageReducer;
