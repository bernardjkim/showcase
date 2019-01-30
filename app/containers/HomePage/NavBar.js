/**
 *
 * NavBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { StyledAppBar, Logo, ButtonLogin } from './components';

/* eslint-disable react/prefer-stateless-function */
class NavBar extends React.Component {
  render() {
    return (
      <StyledAppBar color="inherit" position="absolute">
        <Toolbar>
          <Logo>ShowCase</Logo>
          <ButtonLogin>Login</ButtonLogin>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
