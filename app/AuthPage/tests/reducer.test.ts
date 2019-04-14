import {
  clearErrors,
  createToken,
  createTokenError,
  createTokenSuccess,
  createUser,
  createUserError,
  createUserSuccess,
} from '../actions';
import AuthPageReducer, { initialState } from '../reducer';
import { AuthState } from '../types';

const error = new Error('Test error');
describe('AuthPageReducer', () => {
  let state: AuthState;
  beforeEach(() => {
    state = initialState;
  });

  it('handle the clear errors action', () => {
    expect(AuthPageReducer(state, clearErrors())).toMatchSnapshot();
  });

  it('handle the create token action', () => {
    const form = { email: 'email', password: 'password' };
    expect(AuthPageReducer(state, createToken(form))).toMatchSnapshot();
  });

  it('handle the create token success action', () => {
    expect(AuthPageReducer(state, createTokenSuccess())).toMatchSnapshot();
  });

  it('handle the create token error action', () => {
    expect(AuthPageReducer(state, createTokenError(error))).toMatchSnapshot();
  });

  it('handle the create user action', () => {
    const form = { username: 'username', email: 'email', password: 'password', passwordConfirm: 'password' };
    expect(AuthPageReducer(state, createUser(form))).toMatchSnapshot();
  });

  it('handle the create user success action', () => {
    expect(AuthPageReducer(state, createUserSuccess())).toMatchSnapshot();
  });

  it('handle the create user error action', () => {
    expect(AuthPageReducer(state, createUserError(error))).toMatchSnapshot();
  });
});
