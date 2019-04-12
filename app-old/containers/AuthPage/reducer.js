/*
 *
 * AuthPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  CLEAR_ERRORS,
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
});

function AuthPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.set('error', false);

    case CLEAR_ERRORS:
      return state.set('error', false);

    case CREATE_TOKEN:
      return state.set('loading', true).set('error', false);

    case CREATE_TOKEN_SUCCESS:
      return state.set('loading', false);

    case CREATE_TOKEN_ERROR: {
      return state
        .set('error', fromJS({ createToken: action.error }))
        .set('loading', false);
    }

    case CREATE_USER:
      return state.set('loading', true).set('error', false);

    case CREATE_USER_SUCCESS:
      return state.set('loading', false);

    case CREATE_USER_ERROR:
      return state
        .set('error', fromJS({ createUser: action.error }))
        .set('loading', false);

    default:
      return state;
  }
}

export default AuthPageReducer;
