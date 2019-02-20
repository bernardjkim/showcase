/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Globals */
import { deleteToken } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';

/* Shard Components */
import Nav from 'components/Nav';
import SearchResults from 'components/SearchResults';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { loadArticlesAll, clearState, loadNext } from './actions';
import makeSelectHomePage, {
  makeSelectArticles,
  makeSelectOffset,
} from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.handleLoadArticles();
  }

  componentWillUnmount() {
    this.props.handleClearState();
  }

  handleSubmitSearch = search => e => {
    if (e.key === 'Enter' && search !== '') {
      e.preventDefault();
      this.props.history.push(`/search?q=${search}`);
    }
  };

  handleViewComments = id => () => {
    this.props.history.push(`/article?id=${id}`);
  };

  render() {
    /* functions */
    const { handleLoadNext } = this.props;
    return (
      <div>
        <Nav {...this.props} handleSubmitSearch={this.handleSubmitSearch} />
        <SearchResults
          {...this.props}
          handleViewComments={this.handleViewComments}
          handleScrollBottom={handleLoadNext}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  /* state */
  /* functions */
  handleLoadNext: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  user: makeSelectUser(),
  articles: makeSelectArticles(),
  offset: makeSelectOffset(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleClearState: () => {
      dispatch(clearState());
    },
    handleLoadArticles: () => {
      dispatch(loadArticlesAll());
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

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
