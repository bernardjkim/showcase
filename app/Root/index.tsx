/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { withRouter } from 'react-router';

/** Font Awesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/** MUI theme */
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import HomePage from '../HomePage/Loadable';
// import ArticlePage from 'containers/ArticlePage/Loadable';
// import SubmissionPage from 'containers/SubmissionPage/Loadable';
// import AuthPage from 'containers/AuthPage/Loadable';
// import SearchPage from 'containers/SearchPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
// import ProfilePage from 'containers/ProfilePage/Loadable';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { loadUser } from './actions';
import { makeSelectUser, makeSelectValidateToken } from './selectors';

import saga from './saga';
import reducer from './reducer';

import theme from './theme';
import GlobalStyle from '../global-styles';

library.add(fas, fab);

function App(props: any) {
  const { user, validateToken } = props;
  const { handleLoadUser } = props;

  if (!user && validateToken) {
    handleLoadUser();
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        {/* <Route exact path="/submit" component={SubmissionPage} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/article" component={ArticlePage} />
        <Route exact path="/profile" component={ProfilePage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </MuiThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  validateToken: makeSelectValidateToken(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleLoadUser: () => {
      dispatch(loadUser());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga, mode: '' });

export default withRouter(
  compose(
    withReducer,
    withSaga,
    withConnect,
  )(App),
);
