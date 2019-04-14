/**
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

/* Utils */
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* Local Components */
import SearchResults from './SearchResults';

/* Locals */
import { clearState } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectHomePage from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent<Props> {
  componentWillUnmount() {
    this.props.handleClearState();
  }

  render() {
    return <SearchResults />;
  }
}

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleClearState: () => dispatch(clearState()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga, mode: '' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
