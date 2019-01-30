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
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  token: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TOKEN:
      return state.set('loading', true).set('error', false);

    case CREATE_TOKEN_SUCCESS:
      return state.set('token', action.token).set('loading', false);

    case CREATE_TOKEN_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);

    default:
      return state;
  }
}

export default appReducer;
