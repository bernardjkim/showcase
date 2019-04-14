import { User } from 'types';

export interface RootState {
  loading: boolean;
  error?: Error;
  user?: User;
  validateToken: boolean;
}

// =============================================================================
//  ACTIONS
// =============================================================================

export const DELETE_TOKEN = 'app/App/DELETE_TOKEN';
export const DELETE_TOKEN_SUCCESS = 'app/App/DELETE_TOKEN_SUCCESS';
export const DELETE_TOKEN_ERROR = 'app/App/DELETE_TOKEN_ERROR';

export const LOAD_USER = 'app/App/LOAD_USER';
export const LOAD_USER_SUCCESS = 'app/App/LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'app/App/LOAD_USER_ERROR';

interface DeleteTokenAction {
  type: typeof DELETE_TOKEN;
}

interface DeleteTokenErrorAction {
  type: typeof DELETE_TOKEN_ERROR;
  error: Error;
}

interface DeleteTokenSuccessAction {
  type: typeof DELETE_TOKEN_SUCCESS;
}

interface LoadUserAction {
  type: typeof LOAD_USER;
}

interface LoadUserErrorAction {
  type: typeof LOAD_USER_ERROR;
  error: Error;
}

interface LoadUserSuccessAction {
  type: typeof LOAD_USER_SUCCESS;
  user: User;
}

export type RootActionTypes =
  | DeleteTokenAction
  | DeleteTokenErrorAction
  | DeleteTokenSuccessAction
  | LoadUserAction
  | LoadUserErrorAction
  | LoadUserSuccessAction;
