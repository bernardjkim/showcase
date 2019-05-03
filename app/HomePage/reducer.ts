/*
 *
 * HomePage reducer
 *
 */

import { CLEAR_STATE, HomeActionTypes, HomeState, SET_OFFSET, SET_SEARCH, SET_SORT, SET_USERNAME } from './types';

export const initialState: HomeState = {
  tags: [],
  offset: 0,
  sort: 'new',
  username: '',
};

function homePageReducer(state: HomeState = initialState, action: HomeActionTypes) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState;

    case SET_OFFSET:
      return { ...state, offset: action.offset };

    case SET_SEARCH:
      return {
        ...state,
        offset: 0,
        tags: action.search ? action.search : [],
      };

    case SET_SORT:
      return {
        ...state,
        offset: 0,
        sort: action.sort,
      };

    case SET_USERNAME:
      return {
        ...state,
        offset: 0,
        username: action.username,
      };

    default:
      return state;
  }
}

export default homePageReducer;
