/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { clearErrors, createToken } from './actions';

import { Actions, ButtonPrimary, ButtonSecondary, ErrorMessage, FormContainer, FormInput } from './components';
import { makeSelectError } from './selectors';
import { LoginFormData } from './types';

class LoginForm extends React.PureComponent<Props, State> {
  readonly state: State = {
    email: '',
    password: '',
  };

  handleOnChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [field]: e.target.value });
  };

  render() {
    const { handleOnChange } = this;
    const { error, handleCreateToken, handleToggle } = this.props;
    const { email, password } = this.state;

    return (
      <FormContainer>
        <FormInput onChange={handleOnChange('email')} label="Email Address" type="email" autoFocus={true} />
        <FormInput onChange={handleOnChange('password')} label="Password" type="password" />

        <Actions>
          <ButtonPrimary label="Login" handleClick={handleCreateToken({ email, password })} />
          <ButtonSecondary label="Signup" handleClick={handleToggle} />
        </Actions>
        <ErrorMessage hidden={!error || !error.createToken}>Invalid Email or Password</ErrorMessage>
      </FormContainer>
    );
  }
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { handleToggle: () => void };

type State = {
  email: string;
  password: string;
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleCreateToken: (form: LoginFormData) => () => dispatch(createToken(form)),
  handleClearErrors: () => dispatch(clearErrors()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginForm);
