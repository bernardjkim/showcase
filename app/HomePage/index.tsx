/**
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Shard Components */
import Nav from 'containers/Nav';

/* Local Components */
import SearchResults from './SearchResults';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { clearState } from './actions';
import makeSelectHomePage from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent<Props> {
  componentWillUnmount() {
    this.props.handleClearState();
  }

  render() {
    return (
      <div>
        <Nav />
        <SearchResults />
      </div>
    );
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
