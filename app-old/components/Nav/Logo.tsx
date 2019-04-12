import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { HomeLink } from 'containers/Routes';

import NavContent from './components/NavContent';

const Text = styled(Typography)`
  width: 100px;
  font-size: 20px;
` as typeof Typography;

const Logo = () => (
  <NavContent>
    <Text color="primary" component={HomeLink}>
      ShowCase
    </Text>
  </NavContent>
);

export default Logo;
