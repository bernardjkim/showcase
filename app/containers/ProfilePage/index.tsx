/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import Nav from 'components/Nav';
import { makeSelectUser } from 'containers/App/selectors';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from './Header';
import Posts from './Posts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Nav {...this.props} />
        <Header />
        <Posts />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga, mode: '' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
