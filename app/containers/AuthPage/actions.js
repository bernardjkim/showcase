/*
 *
 * AuthPage actions
 *
 */

import {
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from './constants';

/**
 * Create token, this action starts the request saga
 *
 * @param  {string}  email    - The user email
 * @param  {string}  password - The user password
 *
 * @return {object}           - An action object with a type of CREATE_TOKEN
 */
export function createToken(email, password) {
  return {
    type: CREATE_TOKEN,
    email,
    password,
  };
}

/**
 * Dispatched when creating the token is successful
 *
 * @return  {object}        - An action object with a type of CREATE_TOKEN_SUCCESSFUL
 */

export function createTokenSuccess() {
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
export function createTokenError(error) {
  return {
    type: CREATE_TOKEN_ERROR,
    error,
  };
}
export function createUser(username, email, password, passwordConfirm) {
  return {
    type: CREATE_USER,
    username,
    email,
    password,
    passwordConfirm,
  };
}

export function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS,
  };
}

export function createUserError(error) {
  return {
    type: CREATE_USER_ERROR,
    error,
  };
}
