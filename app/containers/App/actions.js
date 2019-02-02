/*
 * 
 * App actions
 * 
 */

import {
  DELETE_TOKEN,
  DELETE_TOKEN_ERROR,
  DELETE_TOKEN_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from './constants';

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
 * Dispatched when deleteing token fails
 *
 * @return  {object}  - An action object with a type of DELETE_TOKEN_SUCCESS
 */
export function deleteTokenSuccess() {
  return {
    type: DELETE_TOKEN_SUCCESS,
  };
}

/**
 * Dispatched when deleteing token is successful
 *
 * @param   {Error} error - Error received
 *
 * @return  {object}      - An action object with a type of DELETE_TOKEN_SUCCESS
 */
export function deleteTokenError(error) {
  return {
    type: DELETE_TOKEN_ERROR,
    error,
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
