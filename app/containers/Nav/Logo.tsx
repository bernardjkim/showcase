import React from 'react';

import { HomeLink } from 'Routes';

import { LogoText, NavContent } from './components';

const Logo = () => (
  <NavContent>
    <LogoText color="primary" component={HomeLink}>
      ShowCase
    </LogoText>
  </NavContent>
);

export default Logo;
