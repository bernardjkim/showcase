/**
 *
 * LoginForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

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

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-top: 40px;

  button {
    margin-right: 20px;
    width: 110px;
  }
`;

const ButtonLogin = styled(Button)`
  color: white;
`;

/* eslint-disable react/prefer-stateless-function */
export class LoginForm extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title color="primary">ShowCase</Title>

        <Header>Show case your personal projects</Header>
        <Welcome>Welcome Back, Please login to your account</Welcome>

        <StyledTextField
          margin="dense"
          variant="outlined"
          label="Email Address"
          type="email"
        />
        <StyledTextField
          margin="dense"
          variant="outlined"
          label="Password"
          type="password"
        />

        <ContainerButtons>
          <ButtonLogin color="primary" size="large" variant="contained">
            Login
          </ButtonLogin>
          <Button color="primary" size="large" variant="outlined">
            Sign Up
          </Button>
        </ContainerButtons>
      </Container>
    );
  }
}

LoginForm.propTypes = {};

export default LoginForm;
