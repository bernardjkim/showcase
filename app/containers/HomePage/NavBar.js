/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography, InputAdornment } from '@material-ui/core';
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
  flex-basis: 0;
  div {
    height: 36px;

    fieldset {
      border-radius: 30px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  flex-basis: 0;
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon color="#8dd5c7" icon={faSearch} />
                </InputAdornment>
              ),
            }}
            placeholder="Search Showcase"
          />
          <Actions>
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
          </Actions>
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
