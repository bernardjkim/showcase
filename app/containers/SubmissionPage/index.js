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
import { makeSelectUser } from 'containers/App/selectors';
import makeSelectSubmissionPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { submitForm } from './actions';

import SubmissionForm from './SubmissionForm';
import AuthRequiredPage from './AuthRequiredPage';

/* eslint-disable react/prefer-stateless-function */
export class SubmissionPage extends React.PureComponent {
  render() {
    const { user } = this.props;

    return (
      <div>
        {user ? <SubmissionForm {...this.props} /> : <AuthRequiredPage />}
      </div>
    );
  }
}

SubmissionPage.propTypes = {
  // state variables
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  // dispatch functions
};

const mapStateToProps = createStructuredSelector({
  submissionPage: makeSelectSubmissionPage(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmitForm: data => {
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
