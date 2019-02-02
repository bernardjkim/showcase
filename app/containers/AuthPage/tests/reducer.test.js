import { fromJS } from 'immutable';
import AuthPageReducer from '../reducer';
import {
  createToken,
  createTokenError,
  createTokenSuccess,
  createUser,
  createUserError,
  createUserSuccess,
} from '../actions';

describe('AuthPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
    });
  });

  it('returns the initial state', () => {
    expect(AuthPageReducer(undefined, {})).toMatchSnapshot();
  });
  it('handle the create token action', () => {
    const email = 'email';
    const password = 'password';
    expect(
      AuthPageReducer(state, createToken(email, password)),
    ).toMatchSnapshot();
  });

  it('handle the create token success action', () => {
    expect(AuthPageReducer(state, createTokenSuccess())).toMatchSnapshot();
  });

  it('handle the create token error action', () => {
    const error = new Error('Test error');
    expect(AuthPageReducer(state, createTokenError(error))).toMatchSnapshot();
  });

  it('handle the create user action', () => {
    const username = 'username';
    const email = 'email';
    const password = 'password';
    const confirmPassword = 'password';
    expect(
      AuthPageReducer(
        state,
        createUser(username, email, password, confirmPassword),
      ),
    ).toMatchSnapshot();
  });

  it('handle the create user success action', () => {
    expect(AuthPageReducer(state, createUserSuccess())).toMatchSnapshot();
  });

  it('handle the create user error action', () => {
    const error = new Error('Test Error');
    expect(AuthPageReducer(state, createUserError(error))).toMatchSnapshot();
  });
});
