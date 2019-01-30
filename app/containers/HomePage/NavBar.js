/**
 *
 * NavBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { StyledAppBar, Logo, ButtonLogin } from './components';
import { LoginLink, SubmissionLink } from '../Routes';

const Submit = styled(Typography)`
  margin-right: 5px;
  font-weight: 300;
`;
/* eslint-disable react/prefer-stateless-function */
class NavBar extends React.Component {
  render() {
    return (
      <StyledAppBar color="inherit" position="absolute">
        <Toolbar>
          <Logo color="primary">ShowCase</Logo>

          <Button component={SubmissionLink}>
            <Submit color="primary">Submit</Submit>
            <FontAwesomeIcon size="1x" color="#57c1ae" icon={faPlus} />
          </Button>
          <ButtonLogin component={LoginLink} color="primary">
            Login
          </ButtonLogin>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
