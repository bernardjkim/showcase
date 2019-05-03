/*
 *
 * App reducer
 *
 */

import {
  DELETE_TOKEN,
  DELETE_TOKEN_ERROR,
  DELETE_TOKEN_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
  RootActionTypes,
  RootState,
  SET_USER,
} from './types';

// The initial state of the App
export const initialState: RootState = {
  user: undefined,
};

function AppReducer(state: RootState = initialState, action: RootActionTypes) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };

    case DELETE_TOKEN:
      return { ...state, loading: true, error: undefined };

    case DELETE_TOKEN_SUCCESS:
      return { ...state, loading: false };

    case DELETE_TOKEN_ERROR:
      return { ...state, loading: false, error: action.error };

    case LOAD_USER:
      return { ...state, user: undefined, validateToken: false, loading: true, error: undefined };

    case LOAD_USER_SUCCESS:
      return { ...state, user: action.user ? action.user : undefined, loading: false };

    case LOAD_USER_ERROR:
      return { ...state, loading: false, error: { loadUser: action.error } };

    default:
      return state;
  }
}

export default AppReducer;
