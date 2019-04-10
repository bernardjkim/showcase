import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  disply: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 80px;
`;

const Username = styled(Typography)`` as typeof Typography;

const Header = () => (
  <Container>
    <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/19/pinyon-jay-bird.jpg?w968h681" />
    <Username>[Username]</Username>
  </Container>
);

export default Header;
