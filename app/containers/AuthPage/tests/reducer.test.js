import { fromJS } from 'immutable';
import AuthPageReducer from '../reducer';
import { createUser, createUserError, createUserSuccess } from '../actions';

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
