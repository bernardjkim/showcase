/*
 *
 * AuthPage actions
 *
 */

import {
  LoginFormData,
  SignupFormData,
  AuthActionTypes,
  CLEAR_ERRORS,
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from './types';

/**
 * Clear error messages
 *
 * @return  {object}  - An action object with a type of CLEAR_ERRORS
 */
export function clearErrors(): AuthActionTypes {
  return {
    type: CLEAR_ERRORS,
  };
}

/**
 * Create token, this action starts the request saga
 *
 * @param  {string}  email    - The user email
 * @param  {string}  password - The user password
 *
 * @return {object}           - An action object with a type of CREATE_TOKEN
 */
export function createToken(form: LoginFormData): AuthActionTypes {
  return {
    type: CREATE_TOKEN,
    form,
  };
}

/**
 * Dispatched when creating the token is successful
 *
 * @return  {object}        - An action object with a type of CREATE_TOKEN_SUCCESSFUL
 */

export function createTokenSuccess(): AuthActionTypes {
  return {
    type: CREATE_TOKEN_SUCCESS,
  };
}

/**
 * Dispatched when creating the token failed
 *
 * @param   {string}  error - Received error
 *
 * @return  {object}        - An action object with a type of CREATE_TOKEN_ERROR
 */
export function createTokenError(error: Error): AuthActionTypes {
  return {
    type: CREATE_TOKEN_ERROR,
    error,
  };
}
export function createUser(form: SignupFormData): AuthActionTypes {
  return {
    type: CREATE_USER,
    form,
  };
}

export function createUserSuccess(): AuthActionTypes {
  return {
    type: CREATE_USER_SUCCESS,
  };
}

export function createUserError(error: Error): AuthActionTypes {
  return {
    type: CREATE_USER_ERROR,
    error,
  };
}
