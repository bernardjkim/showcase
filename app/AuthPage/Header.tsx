/**
 *
 * Header
 *
 */

import React from 'react';

import { HeaderContainer, Logo, Message, Welcome } from './components';

const Header: React.FC<Props> = props => {
  const { message, welcome } = props;
  return (
    <HeaderContainer>
      <Logo color="primary">koblstone</Logo>
      <Message>{message}</Message>
      <Welcome>{welcome}</Welcome>
    </HeaderContainer>
  );
};

type Props = {
  message: string;
  welcome: string;
};

export default Header;
