/**
 *
 * SubmissionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectUser,
  makeSelectLoading as makeSelectLoadingGlobal,
} from 'containers/App/selectors';
import { Redirect } from 'react-router-dom';
import makeSelectSubmissionPage, {
  makeSelectSubmissionSuccess,
  makeSelectLoading as makeSelectLoadingSubmit,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { submitForm, clearState } from './actions';

import SubmissionForm from './SubmissionForm';
// import AuthRequiredPage from './AuthRequiredPage';

/* eslint-disable react/prefer-stateless-function */
export class SubmissionPage extends React.PureComponent {
  render() {
    const { user, loadingGlobal, submissionSuccess } = this.props;
    const { handleClearState } = this.props;

    if (!user && !loadingGlobal) return <Redirect to="/auth" />;

    if (submissionSuccess) {
      handleClearState();
      return <Redirect to="/" />;
    }
    return (
      <div>
        <SubmissionForm {...this.props} />
      </div>
    );
  }
}

SubmissionPage.propTypes = {
  // state variables
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loadingGlobal: PropTypes.bool.isRequired, // loading status for LOAD_USER
  submissionSuccess: PropTypes.bool.isRequired,

  // dispatch functions
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
