/*
 *
 * HomePage reducer
 *
 */

import { CLEAR_STATE, HomeActionTypes, HomeState, SET_SEARCH, SET_SORT } from './types';

export const initialState: HomeState = {
  tags: [],
  sort: 'new',
};

function homePageReducer(state: HomeState = initialState, action: HomeActionTypes) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState;

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

    default:
      return state;
  }
}

export default homePageReducer;
