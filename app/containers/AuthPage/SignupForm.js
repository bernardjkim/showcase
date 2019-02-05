/**
 *
 * SignupForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Typography)`
  width: 80%;
  margin-top: 80px;
  font-size: 20px;
`;

const Header = styled(Typography)`
  width: 80%;
  margin-top: 80px;
  font-size: 30px;
  font-weight: 300;
`;

const Welcome = styled(Typography)`
  width: 80%;
  margin-top: 20px;
  font-weight: 200;
`;

const StyledTextField = styled(TextField)`
  width: 80%;
  margin-top: 20px;

  label {
    color: #57c1ae;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-top: 25px;

  button {
    margin-right: 20px;
    width: 120px;
  }
`;

const ButtonSignup = styled(Button)`
  color: white;
`;

const ErrorMessage = styled(Typography)`
  color: red;
  width: 80%;
  margin-top: 10px;
  font-weight: 300;
  display: ${props => (props.hidden ? 'none' : 'block')};
`;

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
    const { error } = this.props;
    const { handleCreateUser, handleToggle } = this.props;

    return (
      <Container>
        <Title color="primary">ShowCase</Title>

        <Header>Show case your personal projects</Header>
        <Welcome>Welcome To ShowCase. Please Create Your Account</Welcome>

        <StyledTextField
          onChange={this.handleOnChange('username')}
          margin="dense"
          variant="outlined"
          label="Username"
          type="username"
        />

        <StyledTextField
          onChange={this.handleOnChange('email')}
          margin="dense"
          variant="outlined"
          label="Email Address"
          type="email"
        />
        <StyledTextField
          onChange={this.handleOnChange('password')}
          margin="dense"
          variant="outlined"
          label="Password"
          type="password"
        />
        <StyledTextField
          onChange={this.handleOnChange('passwordConfirm')}
          margin="dense"
          variant="outlined"
          label="Confirm Password"
          type="password"
        />

        {/* TODO: more specific error message */}
        <ErrorMessage hidden={!error || !error.get('createUser')}>
          Invalid Fields
        </ErrorMessage>

        <ContainerButtons>
          <ButtonSignup
            onClick={() =>
              handleCreateUser(
                this.state.username,
                this.state.email,
                this.state.password,
                this.state.passwordConfirm,
              )
            }
            color="primary"
            size="large"
            variant="contained"
          >
            Sign Up
          </ButtonSignup>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={handleToggle(true)}
          >
            Login
          </Button>
        </ContainerButtons>
      </Container>
    );
  }
}

SignupForm.propTypes = {
  // state variables
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  handleToggle: PropTypes.func.isRequired,
  // dispatch functions
  handleCreateUser: PropTypes.func.isRequired,
};

export default SignupForm;
