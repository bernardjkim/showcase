/**
 *
 * LoginForm
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
class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    /* state */
    const { error } = this.props;
    /* functions */
    const { handleCreateToken, handleToggle } = this.props;

    return (
      <FormContainer>
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

        <Actions>
          <ButtonPrimary
            label="Login"
            handleClick={() =>
              handleCreateToken(this.state.email, this.state.password)
            }
          />
          <ButtonSecondary label="Signup" handleClick={handleToggle(false)} />
        </Actions>
        <ErrorMessage hidden={!error || !error.get('createToken')}>
          Invalid Email or Password
        </ErrorMessage>
      </FormContainer>
    );
  }
}

LoginForm.propTypes = {
  /* state */
  handleToggle: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /* functions */
  handleCreateToken: PropTypes.func.isRequired,
};

export default LoginForm;
