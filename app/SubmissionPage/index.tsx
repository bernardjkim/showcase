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
import SubmissionForm from './SubmissionForm';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderMessage = styled(Typography)`
  font-weight: 100;
  font-size: 32px;
  @media (min-width: 600px) {
    font-size: 48px;
  }
` as typeof Typography;

const FormContainer = styled(Grid)`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 14px;
` as typeof Grid;

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
      <Grid container={true} justify="center">
        <FormContainer item={true} container={true} justify="center" xs={12} sm={10} md={8} xl={6} component={Paper}>
          <Grid item={true} container={true} xs={12} justify="flex-end">
            <Button onClick={() => this.props.history.push(`/`)}>
              <FontAwesomeIcon color="#a9caca" size="2x" icon={faTimesCircle} />
            </Button>
          </Grid>
          <HeaderMessage color="primary">Submit A Website</HeaderMessage>
          <SubmissionForm {...this.props} />
        </FormContainer>
      </Grid>
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
