/**
 *
 * SubmissionPage
 *
 */

import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { submitForm, clearState } from './actions';
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
