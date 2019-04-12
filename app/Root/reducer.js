/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DELETE_TOKEN,
  DELETE_TOKEN_ERROR,
  DELETE_TOKEN_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  user: false,
  validateToken: true,
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TOKEN:
      return state.set('loading', true).set('error', false);

    case DELETE_TOKEN_SUCCESS:
      return state.set('loading', false);

    case DELETE_TOKEN_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    case LOAD_USER:
      return state
        .set('user', false)
        .set('validateToken', false)
        .set('loading', true)
        .set('error', false);

    case LOAD_USER_SUCCESS:
      return state.set('user', fromJS(action.user)).set('loading', false);

    case LOAD_USER_ERROR:
      return state
        .set('error', fromJS({ loadUser: action.error }))
        .set('loading', false);

    default:
      return state;
  }
}

export default AppReducer;
