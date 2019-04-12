import { Article } from 'types';
// =============================================================================
//  STATE
// =============================================================================

export interface HomeState {
  loading: boolean;
  error?: Error;
  articles: Article[];
  offset: number;
}

// =============================================================================
//  ACTIONS
// =============================================================================

export const CLEAR_STATE = 'app/HomePage/CLEAR_STATE';

export const LOAD_ARTICLES_ALL = 'app/HomePage/LOAD_ARTICLES_ALL';
export const LOAD_ARTICLES_ALL_ERROR = 'app/HomePage/LOAD_ARTICLES_ALL_ERROR';
export const LOAD_ARTICLES_ALL_SUCCESS =
  'app/HomePage/LOAD_ARTICLES_ALL_SUCCESS';

export const LOAD_NEXT = 'app/HomePage/LOAD_NEXT';
export const LOAD_NEXT_ERROR = 'app/HomePage/LOAD_NEXT_ERROR';
export const LOAD_NEXT_SUCCESS = 'app/HomePage/LOAD_NEXT_SUCCESS';

interface ClearStateAction {
  type: typeof CLEAR_STATE;
}

interface LoadArticlesAllAction {
  type: typeof LOAD_ARTICLES_ALL;
}

interface LoadArticlesAllErrorAction {
  type: typeof LOAD_ARTICLES_ALL_ERROR;
  error: Error;
}

interface LoadArticlesAllSuccessAction {
  type: typeof LOAD_ARTICLES_ALL_SUCCESS;
  articles: Article[];
}

interface LoadNextAction {
  type: typeof LOAD_NEXT;
}

interface LoadNextErrorAction {
  type: typeof LOAD_NEXT_ERROR;
  error: Error;
}

interface LoadNextSuccessAction {
  type: typeof LOAD_NEXT_SUCCESS;
  articles: Article[];
}

export type HomeActionTypes =
  | ClearStateAction
  | LoadArticlesAllAction
  | LoadArticlesAllErrorAction
  | LoadArticlesAllSuccessAction
  | LoadNextAction
  | LoadNextErrorAction
  | LoadNextSuccessAction;
