/**
 *
 * Nav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Typography,
  InputAdornment,
  Toolbar,
  TextField,
} from '@material-ui/core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AuthLink, HomeLink, SubmitLink } from 'containers/Routes';

import { StyledAppBar, Logo, StyledButton } from './components';

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
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.searchValue || '',
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { user } = this.props;
    const { handleLogout, handleSubmitSearch } = this.props;
    return (
      <StyledAppBar color="inherit" position="absolute">
        <Toolbar>
          <Logo component={HomeLink} color="primary">
            ShowCase
          </Logo>

          <StyledTextField
            color="primary"
            variant="outlined"
            onKeyPress={handleSubmitSearch(this.state.search)}
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

Nav.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  searchValue: PropTypes.string,

  // dispatch functions
  handleLogout: PropTypes.func.isRequired,
  handleSubmitSearch: PropTypes.func.isRequired,
};

export default Nav;
