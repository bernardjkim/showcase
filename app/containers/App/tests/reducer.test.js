import { fromJS } from 'immutable';
import AppReducer from '../reducer';

import {
  deleteToken,
  deleteTokenError,
  deleteTokenSuccess,
  loadUser,
  loadUserError,
  loadUserSuccess,
} from '../actions';

describe('AppReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      user: false,
      validateToken: true,
    });
  });
  it('returns the initial state', () => {
    expect(AppReducer(undefined, {})).toMatchSnapshot();
  });

  it('handle the delete token action', () => {
    expect(AppReducer(state, deleteToken())).toMatchSnapshot();
  });

  it('handle the delete token success action', () => {
    expect(AppReducer(state, deleteTokenSuccess())).toMatchSnapshot();
  });

  it('handle the delete token error action', () => {
    const error = new Error('Test error');
    expect(AppReducer(state, deleteTokenError(error))).toMatchSnapshot();
  });

  it('handle the load user action', () => {
    expect(AppReducer(state, loadUser())).toMatchSnapshot();
  });

  it('handle the load user success action', () => {
    const user = {};
    expect(AppReducer(state, loadUserSuccess(user))).toMatchSnapshot();
  });

  it('handle the load user error action', () => {
    const error = new Error('Test error');
    expect(AppReducer(state, loadUserError(error))).toMatchSnapshot();
  });
});
