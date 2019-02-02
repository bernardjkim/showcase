import { createUser, createUserSuccess, createUserError } from '../actions';
import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from '../constants';

describe('AuthPage actions', () => {
  describe('Create User Action', () => {
    it('has a type of CREATE_USER', () => {
      const username = 'username';
      const email = 'email';
      const password = 'password';
      const passwordConfirm = 'password';
      const expected = {
        type: CREATE_USER,
        username,
        email,
        password,
        passwordConfirm,
      };
      expect(createUser(username, email, password, passwordConfirm)).toEqual(
        expected,
      );
    });
  });

  describe('Create User Success Action', () => {
    it('has a type of CREATE_USER_SUCCESS', () => {
      const expected = {
        type: CREATE_USER_SUCCESS,
      };
      expect(createUserSuccess()).toEqual(expected);
    });
  });

  describe('Create User Error Action', () => {
    it('has a type of CREATE_USER_ERROR', () => {
      const error = new Error('Test Error');
      const expected = {
        type: CREATE_USER_ERROR,
        error,
      };
      expect(createUserError(error)).toEqual(expected);
    });
  });
});
