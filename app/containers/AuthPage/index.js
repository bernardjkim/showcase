/**
 *
 * AuthPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Globals */
import { makeSelectUser } from 'containers/App/selectors';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { createToken, createUser, clearErrors } from './actions';
import makeSelectAuthPage, { makeSelectError } from './selectors';

/* Local Components */
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
    /* state */
    const { user } = this.props;

    if (user) return <Redirect to="/" />;

    return (
      <Container>
        {this.state.showLogin ? (
          <React.Fragment>
            <Header
              message="Showcase your personal projects"
              welcome="Welcome Back. Please Login To Continue."
            />

            <LoginForm {...this.props} handleToggle={this.handleToggle} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Header
              message="Showcase your personal projects"
              welcome="Welcome to Showcase. Please Signup To Continue."
            />
            <SignupForm {...this.props} handleToggle={this.handleToggle} />
          </React.Fragment>
        )}
      </Container>
    );
  }
}

AuthPage.propTypes = {
  /* state */
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /* functions */
  handleClearErrors: PropTypes.func.isRequired,
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
