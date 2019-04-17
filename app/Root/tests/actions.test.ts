import {
  deleteToken,
  deleteTokenError,
  deleteTokenSuccess,
  loadUser,
  loadUserError,
  loadUserSuccess,
} from '../actions';
import {
  DELETE_TOKEN,
  DELETE_TOKEN_ERROR,
  DELETE_TOKEN_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from '../types';

const user = { _id: '_id', username: 'username', email: 'email', updated: new Date('April 16, 2019 20:32:00') };

const error = new Error('Test Error');

describe('App actions', () => {
  describe('Delete Token Action', () => {
    it('has a type of DELETE_TOKEN', () => {
      const expected = {
        type: DELETE_TOKEN,
      };
      expect(deleteToken()).toEqual(expected);
    });
  });

  describe('Delete Token Success Action', () => {
    it('has a type of DELETE_TOKEN_SUCCESS', () => {
      const expected = {
        type: DELETE_TOKEN_SUCCESS,
      };
      expect(deleteTokenSuccess()).toEqual(expected);
    });
  });

  describe('Delete Token Error Action', () => {
    it('has a type of DELETE_TOKEN_ERROR', () => {
      const expected = {
        type: DELETE_TOKEN_ERROR,
        error,
      };
      expect(deleteTokenError(error)).toEqual(expected);
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
      const expected = {
        type: LOAD_USER_SUCCESS,
        user,
      };
      expect(loadUserSuccess(user)).toEqual(expected);
    });
  });

  describe('Load User Error Action', () => {
    it('has a type of LOAD_USER_ERROR', () => {
      const expected = {
        type: LOAD_USER_ERROR,
        error,
      };
      expect(loadUserError(error)).toEqual(expected);
    });
  });
});
