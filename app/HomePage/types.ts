// =============================================================================
//  STATE
// =============================================================================

export interface HomeState {
  tags: string[];
  sort: string;
}

// =============================================================================
//  ACTIONS
// =============================================================================

export const CLEAR_STATE = 'app/HomePage/CLEAR_STATE';
export const SET_SEARCH = 'app/HomePage/SET_SEARCH';
export const SET_SORT = 'app/HomePage/SET_SORT';

interface ClearStateAction {
  type: typeof CLEAR_STATE;
}

interface SetSearchAction {
  type: typeof SET_SEARCH;
  search: string[];
}

interface SetSortAction {
  type: typeof SET_SORT;
  sort: string;
}

export type HomeActionTypes = ClearStateAction | SetSearchAction | SetSortAction;
