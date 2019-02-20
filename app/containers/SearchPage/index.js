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
import { loadArticles, setSearch, loadNext, clearState } from './actions';
import makeSelectSearchPage, {
  makeSelectArticles,
  makeSelectSearch,
} from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class SearchPage extends React.PureComponent {
  componentDidMount() {
    const { q } = queryString.parse(this.props.location.search);
    this.props.handleSetSearch(q);
  }

  componentWillUnmount() {
    this.props.handleClearState();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.props.handleLoadArticles();
    }
  }

  handleSubmitSearch = search => e => {
    if (e.key === 'Enter' && search !== '') {
      e.preventDefault();
      this.props.history.push(`/search?q=${search}`);
      this.props.handleSetSearch(search);
    }
  };

  handleViewComments = id => () => {
    this.props.history.push(`/article?id=${id}`);
  };

  render() {
    /* state */
    const { location } = this.props;
    /* functions */
    const { handleLoadNext } = this.props;
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
          handleScrollBottom={handleLoadNext}
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
  handleLoadNext: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchPage: makeSelectSearchPage(),
  user: makeSelectUser(),
  articles: makeSelectArticles(),
  search: makeSelectSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleClearState: () => {
      dispatch(clearState());
    },
    handleSetSearch: search => {
      dispatch(setSearch(search));
    },
    handleLoadArticles: () => {
      dispatch(loadArticles());
    },
    handleLoadNext: () => {
      dispatch(loadNext());
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
