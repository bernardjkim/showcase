/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Message = styled(Typography)`
  width: 100%;
  font-size: 48px;
  font-weight: 100;
  text-align: center;
`;

const Header = () => (
  <Container>
    <Message color="primary">Submit Website!</Message>
  </Container>
);

export default Header;
