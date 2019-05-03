// =============================================================================
//  STATE
// =============================================================================

export interface HomeState {
  tags: string[];
  sort: string;
  offset: number;
  username: string;
}

// =============================================================================
//  ACTIONS
// =============================================================================

export const CLEAR_STATE = 'app/HomePage/CLEAR_STATE';
export const SET_OFFSET = 'app/HomePage/SET_OFFSET';
export const SET_SEARCH = 'app/HomePage/SET_SEARCH';
export const SET_SORT = 'app/HomePage/SET_SORT';
export const SET_USERNAME = 'app/HomePage/SET_USERNAME';

interface ClearStateAction {
  type: typeof CLEAR_STATE;
}

interface SetOffsetAction {
  type: typeof SET_OFFSET;
  offset: number;
}

interface SetSearchAction {
  type: typeof SET_SEARCH;
  search: string[];
}

interface SetSortAction {
  type: typeof SET_SORT;
  sort: string;
}

interface SetUsernameAction {
  type: typeof SET_USERNAME;
  username: string;
}

export type HomeActionTypes = ClearStateAction | SetOffsetAction | SetSearchAction | SetSortAction | SetUsernameAction;
