/**
 *
 * AuthPage
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

import { makeSelectUser } from 'containers/App/selectors';

import makeSelectAuthPage, { makeSelectError } from './selectors';
import { createToken, createUser, clearErrors } from './actions';
import reducer from './reducer';
import saga from './saga';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

/* eslint-disable react/prefer-stateless-function */
export class AuthPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
    };
  }

  handleToggle = showLogin => () => {
    this.props.handleClearErrors();
    this.setState({ showLogin });
  };

  render() {
    const { user } = this.props;

    if (user) return <Redirect to="/" />;

    return (
      <div>
        {this.state.showLogin ? (
          <LoginForm {...this.props} handleToggle={this.handleToggle} />
        ) : (
          <SignupForm {...this.props} handleToggle={this.handleToggle} />
        )}
      </div>
    );
  }
}

AuthPage.propTypes = {
  // state variables
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  AuthPage: makeSelectAuthPage(),
  user: makeSelectUser(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleCreateToken: (email, password) => {
      dispatch(createToken(email, password));
    },
    handleCreateUser: (username, email, password, passwordConfirm) => {
      dispatch(createUser(username, email, password, passwordConfirm));
    },
    handleClearErrors: () => {
      dispatch(clearErrors());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'authPage', reducer });
const withSaga = injectSaga({ key: 'authPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthPage);
