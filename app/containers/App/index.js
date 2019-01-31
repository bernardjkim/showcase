/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from 'react-router';

/** Font Awesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/** MUI theme */
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import HomePage from 'containers/HomePage/Loadable';
import SubmissionPage from 'containers/SubmissionPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectToken, makeSelectUser } from 'containers/App/selectors';
import { loadUser } from 'containers/App/actions';

import saga from './saga';
import reducer from './reducer';

import theme from './theme';
import GlobalStyle from '../../global-styles';

library.add(fas, fab);

function App(props) {
  const { token, user } = props;
  const { handleLoadUser } = props;

  if (token && !user) handleLoadUser();

  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/submission" component={SubmissionPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </MuiThemeProvider>
  );
}

App.propTypes = {
  // state variables
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  token: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  // dispatch functions
  handleLoadUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
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
const withSaga = injectSaga({ key: 'global', saga });

export default withRouter(
  compose(
    withReducer,
    withSaga,
    withConnect,
  )(App),
);
