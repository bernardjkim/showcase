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
import ImmutablePropTypes from 'react-immutable-proptypes';
import Nav from 'components/Nav';
import { deleteToken } from 'containers/App/actions';
import makeSelectSearchPage, { makeSelectArticles } from './selectors';
import reducer from './reducer';
import saga from './saga';

import SearchContent from './SearchContent';
import { loadArticles } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class SearchPage extends React.PureComponent {
  componentDidMount() {
    const { q } = queryString.parse(this.props.location.search);
    this.props.handleLoadArticles({ q });
  }

  handleSubmitSearch = search => e => {
    if (e.key === 'Enter' && search !== '') {
      e.preventDefault();
      this.props.history.push(`/search?q=${search}`);
      this.props.handleLoadArticles({ q: search });
    }
  };

  render() {
    return (
      <div>
        <Nav
          {...this.props}
          searchValue={queryString.parse(this.props.location.search).q}
          handleSubmitSearch={this.handleSubmitSearch}
        />
        <SearchContent {...this.props} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  // state variables
  location: PropTypes.object.isRequired,
  articles: PropTypes.oneOfType([
    ImmutablePropTypes.list.isRequired,
    PropTypes.bool,
  ]),

  // dispatch functions
  handleLoadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchPage: makeSelectSearchPage(),
  articles: makeSelectArticles(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLoadArticles: query => {
      dispatch(loadArticles(query));
    },
    handleLogout: () => {
      window.location.reload(); // refresh page on logout
      dispatch(deleteToken());
    },
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
