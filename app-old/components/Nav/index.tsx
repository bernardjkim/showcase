/**
 *
 * Nav
 *
 */

import React from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavActions from './NavActions';
import { deleteToken } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  border-bottom: solid 1px;
  border-color: #ccddda;
` as typeof AppBar;

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  handleLogout: () => dispatch(deleteToken()),

  handleSubmitSearch: (search: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && search !== '') {
      e.preventDefault();
      ownProps.history.push(`/search?q=${search}`);
      // this.props.handleSetSearch(search);
    }
  },
});

type OwnProps = {
  user?: object;
  history: string[];
};

type State = {
  search: string;
};

type Props = ReturnType<typeof mapDispatchToProps> & OwnProps;

/* eslint-disable react/prefer-stateless-function */
class Nav extends React.Component<Props, State> {
  readonly state: State = {
    search: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { handleChange } = this;
    const { user, handleLogout, handleSubmitSearch } = this.props;
    const { search } = this.state;

    return (
      <StyledAppBar color="inherit" position="relative">
        <Toolbar>
          <Logo />
          <SearchBar
            handleSubmit={handleSubmitSearch(search)}
            handleChange={handleChange}
            value={search}
          />
          <NavActions user={user} handleLogout={handleLogout} />
        </Toolbar>
      </StyledAppBar>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Nav);
