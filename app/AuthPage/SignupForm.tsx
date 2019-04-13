/**
 *
 * SignupForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import { createUser, clearErrors } from './actions';
import { makeSelectError } from './selectors';

import { FormContainer, FormInput, ErrorMessage, Actions, ButtonPrimary } from './components';
import { SignupFormData } from './types';

/* eslint-disable react/prefer-stateless-function */
class SignupForm extends React.PureComponent<Props, State> {
  readonly state: State = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  handleOnChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [field]: e.target.value });
  };

  render() {
    const { handleOnChange } = this;
    const { error, handleCreateUser } = this.props;
    const { username, email, password, passwordConfirm } = this.state;

    return (
      <FormContainer>
        <FormInput onChange={handleOnChange('username')} label="Username" type="username" autoFocus={true} />
        <FormInput onChange={handleOnChange('email')} label="Email Address" type="email" />
        <FormInput onChange={handleOnChange('password')} label="Password" type="password" />
        <FormInput onChange={handleOnChange('passwordConfirm')} label="Confirm Password" type="password" />

        <Actions>
          <ButtonPrimary
            label="Signup"
            handleClick={handleCreateUser({ username, email, password, passwordConfirm })}
          />
          {/* <ButtonSecondary label="Login" handleClick={handleToggle(true)} /> */}
        </Actions>
        <ErrorMessage hidden={!error || !error.get('createUser')}>Invalid Fields</ErrorMessage>
      </FormContainer>
    );
  }
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleCreateUser: (form: SignupFormData) => () => dispatch(createUser(form)),
  handleClearErrors: () => dispatch(clearErrors()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignupForm);
