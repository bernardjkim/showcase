import React from 'react';

import { HomeLink } from 'Routes';

import { LongText, ShortText } from './components';

const Logo = () => (
  <React.Fragment>
    <LongText color="primary" component={HomeLink}>
      koblstone
    </LongText>
    <ShortText color="primary" component={HomeLink}>
      ks
    </ShortText>
  </React.Fragment>
);

export default Logo;
