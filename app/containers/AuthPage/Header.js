/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 60px;
  padding-bottom: 30px;
`;

const Logo = styled(Typography)`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Message = styled(Typography)`
  font-size: 30px;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Welcome = styled(Typography)`
  font-weight: 200;
`;

const Header = props => {
  const { message, welcome } = props;

  return (
    <Container>
      <Logo color="primary">ShowCase</Logo>
      <Message>{message}</Message>
      <Welcome>{welcome}</Welcome>
    </Container>
  );
};

Header.propTypes = {
  /* state */
  message: PropTypes.string.isRequired,
  welcome: PropTypes.string.isRequired,
};

export default Header;
