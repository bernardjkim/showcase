import {
  clearErrors,
  createToken,
  createTokenError,
  createTokenSuccess,
  createUser,
  createUserSuccess,
  createUserError,
} from '../actions';
import {
  CLEAR_ERRORS,
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from '../constants';

describe('AuthPage actions', () => {
  describe('Clear Errors Action', () => {
    it('has a type of CLEAR_ERRORS', () => {
      const expected = {
        type: CLEAR_ERRORS,
      };
      expect(clearErrors()).toEqual(expected);
    });
  });

  describe('Create Token Action', () => {
    it('has a type of CREATE_TOKEN', () => {
      const email = 'email';
      const password = 'password';
      const expected = {
        type: CREATE_TOKEN,
        email,
        password,
      };
      expect(createToken(email, password)).toEqual(expected);
    });
  });

  describe('Create Token Success Action', () => {
    it('has a type of CREATE_TOKEN_SUCCESS', () => {
      const expected = {
        type: CREATE_TOKEN_SUCCESS,
      };
      expect(createTokenSuccess()).toEqual(expected);
    });
  });

  describe('Create Token Error Action', () => {
    it('has a type of CREATE_TOKEN_ERROR', () => {
      const error = {};
      const expected = {
        type: CREATE_TOKEN_ERROR,
        error,
      };
      expect(createTokenError(error)).toEqual(expected);
    });
  });

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
