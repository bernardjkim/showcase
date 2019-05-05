/**
 *
 * Header
 *
 */

import React from 'react';

import Grid from '@material-ui/core/Grid';

import { HomeLink } from 'Routes';

import { Logo, Message, Welcome } from './components';

const Header: React.FC<Props> = props => {
  const { message, welcome } = props;
  return (
    <Grid item={true} xs={10}>
      <Logo color="primary" component={HomeLink}>
        koblstone
      </Logo>
      <Message>{message}</Message>
      <Welcome>{welcome}</Welcome>
    </Grid>
  );
};

type Props = {
  message: string;
  welcome: string;
};

export default Header;
