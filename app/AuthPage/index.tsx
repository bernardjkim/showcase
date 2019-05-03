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

import Button from '@material-ui/core/Button';

/* Utils */
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* Globals */
import { makeSelectUser } from 'Root/selectors';

/* Locals */
import { clearErrors, createToken } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectAuthPage, { makeSelectError } from './selectors';

/* Local Components */
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { AuthPageContainer } from './components';
import { LoginFormData } from './types';

const Demo = styled(Button)`
  width: 80%;
` as typeof Button;

const AuthPageGraphic = styled.div`
  width: 100%;
  background-color: rgba(87, 193, 174, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

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
    const { user, handleCreateToken } = this.props;

    if (user) {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <AuthPageContainer>
          {this.state.showLogin ? (
            <React.Fragment>
              <Header message="Welcome to Koblstone" welcome="Please Login To Continue." />
              <LoginForm handleToggle={handleToggle(false)} />
              <Demo
                color="secondary"
                variant="contained"
                onClick={handleCreateToken({ email: 'demo@koblstone.com', password: 'password' })}
              >
                Demo
              </Demo>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Header message="Welcome to Koblstone" welcome="Please Signup To Continue." />
              <SignupForm handleToggle={handleToggle(true)} />
            </React.Fragment>
          )}
        </AuthPageContainer>
        <AuthPageGraphic />
      </Container>
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
    handleCreateToken: (form: LoginFormData) => () => dispatch(createToken(form)),
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
