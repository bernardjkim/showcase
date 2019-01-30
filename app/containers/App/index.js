/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Font Awesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import HomePage from 'containers/HomePage/Loadable';
import SubmissionPage from 'containers/SubmissionPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

import GlobalStyle from '../../global-styles';

library.add(fas, fab);

export default function App() {
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
