/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import gql from 'graphql-tag';
import React from 'react';
import { compose, graphql, ChildDataProps } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

/** Font Awesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

/** MUI theme */
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import ArticlePage from 'ArticlePage/Loadable';
import AuthPage from 'AuthPage/Loadable';
import HomePage from 'HomePage/Loadable';
import NotFoundPage from 'NotFoundPage/Loadable';
import ProfilePage from 'ProfilePage/Loadable';
import SubmissionPage from 'SubmissionPage/Loadable';

import NavRoute from './NavRoute';
import PrivateRoute from './PrivateRoute';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { setUser } from './actions';

import reducer from './reducer';
import saga from './saga';

import { User } from 'types';
import GlobalStyle from '../global-styles';
import theme from './theme';

library.add(fas, fab);

export class App extends React.PureComponent<RootProps> {
  componentDidMount() {
    // this.props.handleLoadUser();
  }

  componentDidUpdate(prevProps: RootProps) {
    // update user
    if (this.props.data.user !== prevProps.data.user) {
      this.props.handleSetUser(this.props.data.user!);
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <NavRoute exact={true} path="/" component={HomePage} />
          <NavRoute exact={true} path="/search" component={HomePage} />
          <NavRoute exact={true} path="/article" component={ArticlePage} />
          <Route exact={true} path="/auth" component={AuthPage} />
          <PrivateRoute exact={true} path="/submit" component={SubmissionPage} />
          <Route exact={true} path="/profile" component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </MuiThemeProvider>
    );
  }
}

export const USER_QUERY = gql`
  query GetUser {
    user {
      _id
      username
      email
      updated
    }
  }
`;

export type UserQueryInput = {};

export type UserQueryResponse = {
  user: User;
};

export type UserQueryVariables = {};

const withUserQuery = graphql<UserQueryInput, UserQueryResponse, UserQueryVariables, {}>(USER_QUERY, {
  props: ({ data }) => {
    const props = { data: data! };
    return props;
  },
});

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSetUser: (user: User) => dispatch(setUser(user)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga, mode: '' });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
  withUserQuery,
)(App);

type RootProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  ChildDataProps<{}, UserQueryResponse>;
