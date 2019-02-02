/**
 *
 * LoginForm
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
  margin-top: 40px;

  label {
    color: #57c1ae;
  }
`;

const ErrorMessage = styled(Typography)`
  color: red;
  width: 80%;
  margin-top: 10px;
  font-weight: 300;
  display: ${props => (props.hidden ? 'none' : 'block')};
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
    width: 110px;
  }
`;

const ButtonLogin = styled(Button)`
  color: white;
`;

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
    const { error } = this.props;
    const { handleCreateToken, handleToggle } = this.props;

    return (
      <Container>
        <Title color="primary">ShowCase</Title>

        <Header>Show case your personal projects</Header>
        <Welcome>Welcome Back. Please Login To Your Account</Welcome>

        <StyledTextField
          onChange={this.handleOnChange('email')}
          margin="dense"
          variant="outlined"
          label="Email Address"
          type="email"
          autoFocus
        />
        <StyledTextField
          onChange={this.handleOnChange('password')}
          margin="dense"
          variant="outlined"
          label="Password"
          type="password"
        />

        <ErrorMessage hidden={!error || !error.get('createToken')}>
          Invalid Email or Password
        </ErrorMessage>

        <ContainerButtons>
          <ButtonLogin
            onClick={() =>
              handleCreateToken(this.state.email, this.state.password)
            }
            color="primary"
            size="large"
            variant="contained"
          >
            Login
          </ButtonLogin>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={handleToggle(false)}
          >
            Sign Up
          </Button>
        </ContainerButtons>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  // dispatch functions
  handleCreateToken: PropTypes.func.isRequired,
};

export default LoginForm;
