/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { StyledAppBar, Logo, StyledButton } from './components';
import { AuthLink, SubmitLink } from '../Routes';

const Submit = styled(Typography)`
  margin-right: 5px;
  font-weight: 300;
`;

/* eslint-disable react/prefer-stateless-function */
class NavBar extends React.Component {
  render() {
    const { user } = this.props;
    const { handleLogout } = this.props;
    return (
      <StyledAppBar color="inherit" position="absolute">
        <Toolbar>
          <Logo color="primary">ShowCase</Logo>

          <StyledButton component={SubmitLink}>
            <Submit color="primary">Submit</Submit>
            <FontAwesomeIcon size="1x" color="#57c1ae" icon={faPlus} />
          </StyledButton>
          {user ? (
            <StyledButton onClick={handleLogout} color="primary">
              Logout
            </StyledButton>
          ) : (
            <StyledButton component={AuthLink} color="primary">
              Login
            </StyledButton>
          )}
        </Toolbar>
      </StyledAppBar>
    );
  }
}

NavBar.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  // dispatch functions
  handleLogout: PropTypes.func.isRequired,
};

export default NavBar;
