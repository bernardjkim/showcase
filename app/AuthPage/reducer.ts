/*
 *
 * AuthPage reducer
 *
 */

// import { LOCATION_CHANGE } from 'react-router-redux';
import {
  AuthState,
  AuthActionTypes,
  CLEAR_ERRORS,
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from './types';

export const initialState: AuthState = {
  loading: false,
  error: undefined,
};

function AuthPageReducer(
  state: AuthState = initialState,
  action: AuthActionTypes,
) {
  switch (action.type) {
    // case LOCATION_CHANGE:
    //   return { ...state, error: undefined };

    case CLEAR_ERRORS:
      return { ...AbortController, error: undefined };

    case CREATE_TOKEN:
      return { ...state, loading: true, error: undefined };

    case CREATE_TOKEN_SUCCESS:
      return { ...state, loading: false };

    case CREATE_TOKEN_ERROR: {
      return { ...state, loading: false, error: { createToken: action.error } };
    }

    case CREATE_USER:
      return { ...state, loading: true, error: undefined };

    case CREATE_USER_SUCCESS:
      return { ...state, loading: false };

    case CREATE_USER_ERROR:
      return { ...state, loading: false, error: { createUser: action.error } };

    default:
      return state;
  }
}

export default AuthPageReducer;
