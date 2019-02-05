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
import TextField from '@material-ui/core/TextField';
import { StyledAppBar, Logo, StyledButton } from './components';
import { AuthLink, SubmitLink } from '../Routes';

const Submit = styled(Typography)`
  margin-right: 5px;
  font-weight: 300;
`;

const StyledTextField = styled(TextField)`
  flex-grow: 1;
  div {
    width: 200px;
    height: 36px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleSubmitSearch = e => {
    if (e.key === 'Enter' && this.state.search !== '') {
      e.preventDefault();
      this.props.history.push(`/search?q=${this.state.search}`);
    }
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { user } = this.props;
    const { handleLogout } = this.props;
    return (
      <StyledAppBar color="inherit" position="absolute">
        <Toolbar>
          <Logo color="primary">ShowCase</Logo>

          <StyledTextField
            color="primary"
            variant="outlined"
            onKeyPress={this.handleSubmitSearch}
            onChange={this.handleChange}
            value={this.state.search}
          />
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
  history: PropTypes.object.isRequired,

  // dispatch functions
  handleLogout: PropTypes.func.isRequired,
};

export default NavBar;
