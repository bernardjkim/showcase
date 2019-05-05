/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components'

import { clearErrors, createToken } from './actions';

import { ButtonPrimary, ButtonSecondary, ErrorMessage, FormInput } from './components';
import { makeSelectError } from './selectors';
import { LoginFormData } from './types';

import Grid from '@material-ui/core/Grid';

// const Container = styled(Grid)`
//   height: 60%;
// ` as typeof Grid;

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
      <React.Fragment>
        <Grid item={true} xs={10}>
          <FormInput onChange={handleOnChange('email')} label="Email Address" type="email" autoFocus={true} />
          <FormInput onChange={handleOnChange('password')} label="Password" type="password" />
          <ErrorMessage hidden={!error || !error.createToken}>Invalid Email or Password</ErrorMessage>
        </Grid>
        <Grid item={true} xs={5}>
          <ButtonPrimary label="Login" handleClick={handleCreateToken({ email, password })} />
        </Grid>
        <Grid item={true} xs={5}>
          <ButtonSecondary label="Signup" handleClick={handleToggle} />
        </Grid>
        <Grid item={true} xs={10}>
          <ButtonPrimary
            label="Demo"
            handleClick={handleCreateToken({ email: 'demo@koblstone.com', password: 'password' })}
          />
        </Grid>
      </React.Fragment>
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
