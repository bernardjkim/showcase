/*
 *
 * AuthPage actions
 *
 */

import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from './constants';

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
