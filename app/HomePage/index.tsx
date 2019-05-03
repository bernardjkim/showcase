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

/* Local Components */
import SearchResults from './SearchResults';
import SearchSettings from './SearchSettings';

/* Locals */
import { clearState } from './actions';
import reducer from './reducer';
import makeSelectHomePage from './selectors';

export class HomePage extends React.PureComponent<Props> {
  componentWillUnmount() {
    // this.props.handleClearState();
  }

  render() {
    return (
      <React.Fragment>
        <SearchSettings />
        <SearchResults />
      </React.Fragment>
    );
  }
}

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleClearState: () => dispatch(clearState()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
