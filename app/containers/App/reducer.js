/*
 * 
 * App reducer
 * 
 */

import { fromJS } from 'immutable';
import {
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  DELETE_TOKEN,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  token: false,
  user: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TOKEN:
      return state.set('loading', true).set('error', false);

    case CREATE_TOKEN_SUCCESS:
      return state.set('token', action.token).set('loading', false);

    case CREATE_TOKEN_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    case DELETE_TOKEN:
      return state.set('token', false);

    case LOAD_USER:
      return state.set('loading', true).set('error', false);

    case LOAD_USER_SUCCESS:
      return state.set('user', fromJS(action.user)).set('loading', false);

    case LOAD_USER_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    default:
      return state;
  }
}

export default appReducer;
