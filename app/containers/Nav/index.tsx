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

import { deleteToken } from 'Root/actions';
import { makeSelectUser } from 'Root/selectors';

import { makeSelectTags } from 'HomePage/selectors';
import Logo from './Logo';
import NavActions from './NavActions';
import SearchBar from './SearchBar';
import { StyledAppBar, StyledToolbar } from './components';

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  tags: makeSelectTags(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogout: () => dispatch(deleteToken()),
});

type State = {
  search: string;
};

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

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
      let { tags, history } = this.props;
      let url = '/search?';

      if (search.startsWith('@')) {
        url += `username=${search.substring(1)}&`;
      } else {
        tags = [...tags, search];
      }
      if (tags.length > 0) {
        url += `term=${[...tags]}`;
      }
      history.push(url);
      this.setState({ search: '' });
    }
  };

  render() {
    const { handleChange, handleSubmitSearch } = this;
    const { user, handleLogout } = this.props;
    const { search } = this.state;

    return (
      <StyledAppBar color="inherit" position="relative">
        <StyledToolbar>
          <Logo />
          <SearchBar handleSubmit={handleSubmitSearch(search)} handleChange={handleChange} value={search} />
          <NavActions user={user} handleLogout={handleLogout} />
        </StyledToolbar>
      </StyledAppBar>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(Nav));
