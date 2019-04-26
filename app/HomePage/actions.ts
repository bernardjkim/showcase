/*
 *
 * HomePage actions
 *
 */
import { CLEAR_STATE, HomeActionTypes, SET_SEARCH, SET_SORT } from './types';

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
