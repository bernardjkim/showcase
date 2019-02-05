/**
 *
 * SearchPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import queryString from 'query-string';
import makeSelectSearchPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import SearchContent from './SearchContent';

/* eslint-disable react/prefer-stateless-function */
export class SearchPage extends React.PureComponent {
  componentDidMount() {
    const { q } = queryString.parse(this.props.location.search);
    console.log(q);
  }

  render() {
    return <SearchContent />;
  }
}

SearchPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchPage: makeSelectSearchPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchPage', reducer });
const withSaga = injectSaga({ key: 'searchPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchPage);
