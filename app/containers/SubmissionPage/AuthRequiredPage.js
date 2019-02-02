import React from 'react';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { HomeLink, AuthLink } from '../Routes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Message = styled(Typography)`
  margin-top: 75px;
  margin-bottom: 75px;
  font-size: 40px;
  font-weight: 200;
`;

const ButtonLogin = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  width: 200px;
`;

const ButtonHome = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
`;
/* eslint-disable react/prefer-stateless-function */
class AuthRequiredPage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Message>Please Login First To Submit A Website</Message>
        <ButtonLogin color="primary" variant="contained" component={AuthLink}>
          Login
        </ButtonLogin>
        <ButtonHome color="primary" variant="outlined" component={HomeLink}>
          Go Home
        </ButtonHome>
      </Container>
    );
  }
}

export default AuthRequiredPage;
