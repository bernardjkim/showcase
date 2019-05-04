import React from 'react';

import { HomeLink } from 'Routes';

import Grid from '@material-ui/core/Grid';

import { LongText, ShortText } from './components';

const Logo = () => (
  <Grid item={true} container={true} xs={2} alignItems="center">
    <LongText
      color="primary"
      component={HomeLink}
      onClick={() => {
        window.location.reload();
      }}
    >
      koblstone
    </LongText>
    <ShortText
      color="primary"
      component={HomeLink}
      onClick={() => {
        window.location.reload();
      }}
    >
      ks
    </ShortText>
  </Grid>
);

export default Logo;
