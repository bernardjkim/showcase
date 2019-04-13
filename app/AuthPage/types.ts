export interface SignupFormData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthState {
  loading: boolean;
  // TODO: Error Def
  error: any;
}

export const CLEAR_ERRORS = 'app/AuthPage/CLEAR_ERRORS';

export const CREATE_USER = 'app/AuthPage/CREATE_USER';
export const CREATE_USER_SUCCESS = 'app/AuthPage/CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'app/AuthPage/CREATE_USER_ERROR';

export const CREATE_TOKEN = 'app/App/CREATE_TOKEN';
export const CREATE_TOKEN_SUCCESS = 'app/App/CREATE_TOKEN_SUCCESS';
export const CREATE_TOKEN_ERROR = 'app/App/CREATE_TOKEN_ERROR';

export interface ClearErrorsAction {
  type: typeof CLEAR_ERRORS;
}

export interface CreateUserAction {
  type: typeof CREATE_USER;
  form: SignupFormData;
}

export interface CreateUserErrorAction {
  type: typeof CREATE_USER_ERROR;
  error: Error;
}

export interface CreateUserSuccessAction {
  type: typeof CREATE_USER_SUCCESS;
}

export interface CreateTokenAction {
  type: typeof CREATE_TOKEN;
  form: LoginFormData;
}

export interface CreateTokenErrorAction {
  type: typeof CREATE_TOKEN_ERROR;
  error: Error;
}

export interface CreateTokenSuccessAction {
  type: typeof CREATE_TOKEN_SUCCESS;
}

export type AuthActionTypes =
  | ClearErrorsAction
  | CreateTokenAction
  | CreateTokenErrorAction
  | CreateTokenSuccessAction
  | CreateUserAction
  | CreateUserErrorAction
  | CreateUserSuccessAction;
