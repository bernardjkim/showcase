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
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose, Dispatch } from 'redux';

/** Font Awesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/** MUI theme */
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import HomePage from 'HomePage/Loadable';
// import ArticlePage from 'containers/ArticlePage/Loadable';
import SubmissionPage from 'SubmissionPage/Loadable';
import AuthPage from 'AuthPage/Loadable';
import NotFoundPage from 'NotFoundPage/Loadable';
// import ProfilePage from 'containers/ProfilePage/Loadable';
import PrivateRoute from './PrivateRoute';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { loadUser } from './actions';

import saga from './saga';
import reducer from './reducer';

import theme from './theme';
import GlobalStyle from '../global-styles';

library.add(fas, fab);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export class App extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.handleLoadUser();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/search" component={HomePage} />
          <Route exact={true} path="/auth" component={AuthPage} />
          <PrivateRoute exact={true} path="/submit" component={SubmissionPage} />
          {/* <Route exact path="/article" component={ArticlePage} /> */}
          {/* <Route exact path="/profile" component={ProfilePage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleLoadUser: () => dispatch(loadUser()),
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
