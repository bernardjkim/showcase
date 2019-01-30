/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectToken } from 'containers/App/selectors';
import { createToken } from 'containers/App/actions';

import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import LoginForm from './LoginForm';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  render() {
    const { token } = this.props;

    if (token) return <Redirect to="/" />;

    return (
      <div>
        <LoginForm {...this.props} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  // state variables
  token: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  token: makeSelectToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleCreateToken: (email, password) => {
      dispatch(createToken(email, password));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
