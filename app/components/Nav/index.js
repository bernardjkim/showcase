/**
 *
 * Nav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from './Logo';
import SearchBar from './SearchBar';
import NavActions from './NavActions';

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  border-bottom: solid 1px;
  border-color: #ccddda;
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
    /* state */
    const { user } = this.props;

    /* functions */
    const { handleLogout, handleSubmitSearch } = this.props;

    return (
      <StyledAppBar color="inherit" position="relative">
        <Toolbar>
          <Logo />
          <SearchBar
            handleSubmit={handleSubmitSearch(this.state.search)}
            handleChange={this.handleChange}
            value={this.state.search}
          />
          <NavActions user={user} handleLogout={handleLogout} />
        </Toolbar>
      </StyledAppBar>
    );
  }
}

Nav.propTypes = {
  /* state */
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  searchValue: PropTypes.string,

  /* functions */
  handleLogout: PropTypes.func.isRequired,
  handleSubmitSearch: PropTypes.func.isRequired,
};

export default Nav;
