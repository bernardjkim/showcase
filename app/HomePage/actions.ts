/*
 *
 * HomePage actions
 *
 */
import { CLEAR_STATE, HomeActionTypes, SET_OFFSET, SET_SEARCH, SET_SORT, SET_USERNAME } from './types';

/**
 * Clears the homepage state
 *
 * @returns {object}  - An action object with a type of CLEAR_STATE
 */
export function clearState(): HomeActionTypes {
  return {
    type: CLEAR_STATE,
  };
}

export function setOffset(offset: number): HomeActionTypes {
  return {
    type: SET_OFFSET,
    offset,
  };
}

/**
 * Set the current search term
 * @param   {string} search - The search term
 * @returns {object}        - An action object with a type of SET_SEARCH
 */
export function setSearch(search: string[]): HomeActionTypes {
  return {
    type: SET_SEARCH,
    search,
  };
}

export function setSort(sort: string): HomeActionTypes {
  return {
    type: SET_SORT,
    sort,
  };
}

export function setUsername(username: string): HomeActionTypes {
  return {
    type: SET_USERNAME,
    username,
  };
}
