/*
 * 
 * App actions
 * 
 */

import {
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  DELETE_TOKEN,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
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
 * @param   {string}  token - JWT token
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

/**
 * Delete token
 *
 * @return  {object}  - An action object with a type of DELETE_TOKEN
 */
export function deleteToken() {
  return {
    type: DELETE_TOKEN,
  };
}

/**
 * Load user, this action start the request saga
 *
 * @return  {object}  - An action object with a type of LOAD_USER
 */
export function loadUser() {
  return {
    type: LOAD_USER,
  };
}

/**
 * Dispatched when loading user is successful
 *
 * @param   {User}  user  - Received user
 *
 * @return  {object}      - An action object with a type of LOAD_USER_SUCCESS
 */
export function loadUserSuccess(user) {
  return {
    type: LOAD_USER_SUCCESS,
    user,
  };
}

/**
 * Dispatched when loading user fails
 *
 * @param   {Error} error - Error received
 *
 * @return  {object}      - An action object with a type of LOAD_USER_ERROR
 */
export function loadUserError(error) {
  return {
    type: LOAD_USER_ERROR,
    error,
  };
}
