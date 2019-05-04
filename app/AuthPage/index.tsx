/**
 *
 * AuthPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

/* Utils */
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* Globals */
import { makeSelectUser } from 'Root/selectors';

/* Locals */
import { clearErrors } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectAuthPage, { makeSelectError } from './selectors';

/* Local Components */
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthPageGraphic = styled(Grid)`
  @media (min-width: 460px) {
    background-color: rgba(224, 253, 248, 0.5);
  }
` as typeof Grid;

const AuthPageContainer = styled(Grid)`
  height: 100vh;
` as typeof Grid;

const AuthFormContainer = styled(Grid)`
  height: 100%;
` as typeof Grid;

type State = {
  showLogin: boolean;
};

export class AuthPage extends React.PureComponent<Props, State> {
  readonly state: State = {
    showLogin: true,
  };

  handleToggle = (showLogin: boolean) => () => {
    this.props.handleClearErrors();
    this.setState({ showLogin });
  };

  render() {
    const { handleToggle } = this;
    const { user } = this.props;

    if (user) {
      return <Redirect to="/" />;
    }

    return (
      <AuthPageContainer container={true} justify="flex-start">
        <AuthFormContainer item={true} xs={12} sm={6} md={4} container={true} justify="center" spacing={8}>
          {this.state.showLogin ? (
            <React.Fragment>
              <Header message="Welcome to Koblstone" welcome="Please Login To Continue." />
              <LoginForm handleToggle={handleToggle(false)} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Header message="Welcome to Koblstone" welcome="Please Signup To Continue." />
              <SignupForm handleToggle={handleToggle(true)} />
            </React.Fragment>
          )}
        </AuthFormContainer>
        <AuthPageGraphic item={true} xs={false} sm={6} md={8} />
      </AuthPageContainer>
    );
  }
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

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
