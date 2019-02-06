/**
 *
 * SearchPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Globals */
import { deleteToken } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';

/* Shared Components */
import Nav from 'components/Nav';
import SearchResults from 'components/SearchResults';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { loadArticles } from './actions';
import makeSelectSearchPage, { makeSelectArticles } from './selectors';

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

  handleViewComments = id => () => {
    this.props.history.push(`/article?id=${id}`);
  };

  render() {
    /* state */
    const { location } = this.props;
    return (
      <div>
        <Nav
          {...this.props}
          searchValue={queryString.parse(location.search).q}
          handleSubmitSearch={this.handleSubmitSearch}
        />
        <SearchResults
          {...this.props}
          handleViewComments={this.handleViewComments}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  /* state */
  location: PropTypes.object.isRequired,
  /* functions */
  handleLoadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchPage: makeSelectSearchPage(),
  user: makeSelectUser(),
  articles: makeSelectArticles(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLoadArticles: query => {
      dispatch(loadArticles(query));
    },
    handleLogout: () => {
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
