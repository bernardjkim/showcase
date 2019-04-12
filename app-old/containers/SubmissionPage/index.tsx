/**
 *
 * SubmissionPage
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Globals */
import {
  makeSelectUser,
  makeSelectLoading as makeSelectLoadingGlobal,
} from 'containers/App/selectors';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { submitForm, clearState } from './actions';
import makeSelectSubmissionPage, {
  makeSelectSubmissionSuccess,
  makeSelectLoading as makeSelectLoadingSubmit,
} from './selectors';

/* Local Components */
import Footer from './Footer';
import Header from './Header';
import SubmissionForm from './SubmissionForm';
import { Form } from './types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  user?: object;
  loadingGlobal: boolean;
  loadingSubmit: boolean;
  submissionSuccess: boolean;
  handleClearState: () => void;
  handleSubmitForm: (form: Form) => () => void;
};

/* eslint-disable react/prefer-stateless-function */
export class SubmissionPage extends React.PureComponent<Props> {
  render() {
    const {
      user,
      loadingGlobal,
      submissionSuccess,
      handleClearState,
    } = this.props;

    if (!user && !loadingGlobal) return <Redirect to="/auth" />;

    if (submissionSuccess) {
      handleClearState();
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Header />
        <SubmissionForm {...this.props} />
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  submissionPage: makeSelectSubmissionPage(),
  user: makeSelectUser(),
  loadingGlobal: makeSelectLoadingGlobal(),
  loadingSubmit: makeSelectLoadingSubmit(),
  submissionSuccess: makeSelectSubmissionSuccess(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleClearState: () => {
      dispatch(clearState());
    },
    handleSubmitForm: (form: Form) => () => {
      dispatch(submitForm(form));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'submissionPage', reducer });
const withSaga = injectSaga({ key: 'submissionPage', saga, mode: '' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubmissionPage);
