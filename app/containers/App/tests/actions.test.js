import {
  createToken,
  createTokenError,
  createTokenSuccess,
  deleteToken,
  loadUser,
  loadUserError,
  loadUserSuccess,
} from '../actions';
import {
  CREATE_TOKEN,
  CREATE_TOKEN_ERROR,
  CREATE_TOKEN_SUCCESS,
  DELETE_TOKEN,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from '../constants';

describe('App actions', () => {
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
      const token = 'token';
      const expected = {
        type: CREATE_TOKEN_SUCCESS,
        token,
      };
      expect(createTokenSuccess(token)).toEqual(expected);
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

  describe('Delete Token Action', () => {
    it('has a type of DELETE_TOKEN', () => {
      const expected = {
        type: DELETE_TOKEN,
      };
      expect(deleteToken()).toEqual(expected);
    });
  });

  describe('Load User Action', () => {
    it('has a type of LOAD_USER', () => {
      const expected = {
        type: LOAD_USER,
      };
      expect(loadUser()).toEqual(expected);
    });
  });

  describe('Load User Success Action', () => {
    it('has a type of LOAD_USER_SUCCESS', () => {
      const user = {};
      const expected = {
        type: LOAD_USER_SUCCESS,
        user,
      };
      expect(loadUserSuccess(user)).toEqual(expected);
    });
  });

  describe('Load User Error Action', () => {
    it('has a type of LOAD_USER_ERROR', () => {
      const error = {};
      const expected = {
        type: LOAD_USER_ERROR,
        error,
      };
      expect(loadUserError(error)).toEqual(expected);
    });
  });
});
