/**
 *
 * SignupForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { clearErrors, createUser } from './actions';
import { makeSelectError } from './selectors';

import { ButtonPrimary, ButtonSecondary, ErrorMessage, FormInput } from './components';
import { SignupFormData } from './types';

import Grid from '@material-ui/core/Grid';

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
    const { error, handleCreateUser, handleToggle } = this.props;
    const { username, email, password, passwordConfirm } = this.state;

    return (
      <Grid xs={10} item={true} container={true} spacing={16} alignContent="flex-start">
        <Grid item={true} xs={12}>
          <FormInput onChange={handleOnChange('username')} label="Username" type="username" autoFocus={true} />
          <FormInput onChange={handleOnChange('email')} label="Email Address" type="email" />
          <FormInput onChange={handleOnChange('password')} label="Password" type="password" />
          <FormInput onChange={handleOnChange('passwordConfirm')} label="Confirm Password" type="password" />
          <ErrorMessage hidden={!error || !error.createUser}>Invalid Fields</ErrorMessage>
        </Grid>

        <Grid item={true} xs={6}>
          <ButtonPrimary
            label="Signup"
            handleClick={handleCreateUser({ username, email, password, passwordConfirm })}
          />
        </Grid>

        <Grid item={true} xs={6}>
          <ButtonSecondary label="Login" handleClick={handleToggle} />
        </Grid>
      </Grid>
    );
  }
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { handleToggle: () => void };

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
