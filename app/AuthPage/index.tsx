/**
 *
 * AuthPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Globals */
import { makeSelectUser } from 'Root/selectors';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { clearErrors } from './actions';
import makeSelectAuthPage, { makeSelectError } from './selectors';

/* Local Components */
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './Header';
import { AuthPageContainer } from './components';

type State = {
  showLogin: boolean;
};

/* eslint-disable react/prefer-stateless-function */
export class AuthPage extends React.PureComponent<Props, State> {
  readonly state: State = {
    showLogin: true,
  };

  handleToggle = (showLogin: boolean) => () => {
    this.props.handleClearErrors();
    this.setState({ showLogin });
  };

  render() {
    /* state */
    const { user } = this.props;

    if (user) {
      return <Redirect to="/" />;
    }

    return (
      <AuthPageContainer>
        {this.state.showLogin ? (
          <React.Fragment>
            <Header
              message="Showcase your personal projects"
              welcome="Welcome Back. Please Login To Continue."
            />
            <LoginForm />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Header
              message="Showcase your personal projects"
              welcome="Welcome to Showcase. Please Signup To Continue."
            />
            <SignupForm />
          </React.Fragment>
        )}
      </AuthPageContainer>
    );
  }
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = createStructuredSelector({
  AuthPage: makeSelectAuthPage(),
  user: makeSelectUser(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleClearErrors: () => dispatch(clearErrors()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'authPage', reducer });
const withSaga = injectSaga({ key: 'authPage', saga, mode: '' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthPage);
