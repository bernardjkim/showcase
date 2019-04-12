/**
 *
 * SignupForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import FormContainer from './components/FormContainer';
import FormInput from './components/FormInput';
import ErrorMessage from './components/ErrorMessage';
import Actions from './components/Actions';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';

/* eslint-disable react/prefer-stateless-function */
class SignupForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  handleOnChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    /* state */
    const { error } = this.props;
    /* functions */
    const { handleCreateUser, handleToggle } = this.props;

    return (
      <FormContainer>
        <FormInput
          onChange={this.handleOnChange('username')}
          fullWidth
          margin="dense"
          variant="outlined"
          label="Username"
          type="username"
        />
        <FormInput
          onChange={this.handleOnChange('email')}
          fullWidth
          margin="dense"
          variant="outlined"
          label="Email Address"
          type="email"
          autoFocus
        />
        <FormInput
          onChange={this.handleOnChange('password')}
          fullWidth
          margin="dense"
          variant="outlined"
          label="Password"
          type="password"
        />
        <FormInput
          onChange={this.handleOnChange('passwordConfirm')}
          fullWidth
          margin="dense"
          variant="outlined"
          label="Confirm Password"
          type="password"
        />

        <Actions>
          <ButtonPrimary
            label="Signup"
            handleClick={() =>
              handleCreateUser(
                this.state.username,
                this.state.email,
                this.state.password,
                this.state.passwordConfirm,
              )
            }
          />
          <ButtonSecondary label="Login" handleClick={handleToggle(true)} />
        </Actions>
        <ErrorMessage hidden={!error || !error.get('createUser')}>
          Invalid Fields
        </ErrorMessage>
      </FormContainer>
    );
  }
}

SignupForm.propTypes = {
  /* state */
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /* functions */
  handleToggle: PropTypes.func.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
};

export default SignupForm;
