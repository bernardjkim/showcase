import { fromJS } from 'immutable';
import appReducer from '../reducer';

import {
  createToken,
  createTokenError,
  createTokenSuccess,
  deleteToken,
  loadUser,
  loadUserError,
  loadUserSuccess,
} from '../actions';

describe('appReducer', () => {
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
    expect(appReducer(undefined, {})).toMatchSnapshot();
  });

  it('handle the create token action', () => {
    const email = 'email';
    const password = 'password';
    expect(appReducer(state, createToken(email, password))).toMatchSnapshot();
  });

  it('handle the create token success action', () => {
    expect(appReducer(state, createTokenSuccess())).toMatchSnapshot();
  });

  it('handle the create token error action', () => {
    const error = new Error('Test error');
    expect(appReducer(state, createTokenError(error))).toMatchSnapshot();
  });

  it('handle the delete token action', () => {
    expect(appReducer(state, deleteToken())).toMatchSnapshot();
  });

  it('handle the load user action', () => {
    expect(appReducer(state, loadUser())).toMatchSnapshot();
  });

  it('handle the load user success action', () => {
    const user = {};
    expect(appReducer(state, loadUserSuccess(user))).toMatchSnapshot();
  });

  it('handle the load user error action', () => {
    const error = new Error('Test error');
    expect(appReducer(state, loadUserError(error))).toMatchSnapshot();
  });
});
