/**
 *
 * Nav
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import Toolbar from '@material-ui/core/Toolbar';

import { deleteToken } from 'Root/actions';
import { makeSelectUser } from 'Root/selectors';

import Logo from './Logo';
import NavActions from './NavActions';
import SearchBar from './SearchBar';
import { StyledAppBar } from './components';

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogout: () => dispatch(deleteToken()),
});

type State = {
  search: string;
};

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

/* eslint-disable react/prefer-stateless-function */
class Nav extends React.Component<Props, State> {
  readonly state: State = {
    search: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  handleSubmitSearch = (search: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && search !== '') {
      e.preventDefault();
      this.props.history.push(`/search?term=${search}`);
      this.setState({ search: '' });
    }
  };

  render() {
    const { handleChange, handleSubmitSearch } = this;
    const { user, handleLogout } = this.props;
    const { search } = this.state;

    return (
      <StyledAppBar color="inherit" position="relative">
        <Toolbar>
          <Logo />
          <SearchBar handleSubmit={handleSubmitSearch(search)} handleChange={handleChange} value={search} />
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

export default withRouter(compose(withConnect)(Nav));
