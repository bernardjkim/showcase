/**
 *
 * SubmissionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class SubmissionPage extends React.PureComponent {
  render() {
    /* state */
    const { user, loadingGlobal, submissionSuccess } = this.props;
    /* functions */
    const { handleClearState } = this.props;

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

SubmissionPage.propTypes = {
  /* state */
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loadingGlobal: PropTypes.bool.isRequired, // loading status for LOAD_USER
  submissionSuccess: PropTypes.bool.isRequired,
  /* functions */
  handleClearState: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  submissionPage: makeSelectSubmissionPage(),
  user: makeSelectUser(),
  loadingGlobal: makeSelectLoadingGlobal(),
  loadingSubmit: makeSelectLoadingSubmit(),
  submissionSuccess: makeSelectSubmissionSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleClearState: () => {
      dispatch(clearState());
    },
    handleSubmitForm: data => () => {
      const { tag, ...form } = data;
      dispatch(submitForm(form));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'submissionPage', reducer });
const withSaga = injectSaga({ key: 'submissionPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubmissionPage);
