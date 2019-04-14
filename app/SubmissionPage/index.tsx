/**
 *
 * SubmissionPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

/* Utils */
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* Locals */
import { clearState, submitForm } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectSubmissionPage, { makeSelectSubmissionSuccess } from './selectors';
import { Form } from './types';

/* Local Components */
import Footer from './Footer';
import Header from './Header';
import SubmissionForm from './SubmissionForm';
import { SubmissionPageContainer } from './components';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = createStructuredSelector({
  submissionPage: makeSelectSubmissionPage(),
  submissionSuccess: makeSelectSubmissionSuccess(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleClearState: () => dispatch(clearState()),
    handleSubmitForm: (form: Form) => () => dispatch(submitForm(form)),
  };
}

/* eslint-disable react/prefer-stateless-function */
export class SubmissionPage extends React.PureComponent<Props> {
  componentWillUnmount() {
    this.props.handleClearState();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.submissionSuccess !== prevProps.submissionSuccess) {
      this.props.history.push(`/`);
    }
  }

  render() {
    return (
      <SubmissionPageContainer>
        <Header />
        <SubmissionForm {...this.props} />
        <Footer />
      </SubmissionPageContainer>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'submissionPage', reducer });
const withSaga = injectSaga({ key: 'submissionPage', saga, mode: '' });

export default withRouter(
  compose(
    withReducer,
    withSaga,
    withConnect,
  )(SubmissionPage),
);
