/**
 *
 * ArticlePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectUser } from 'containers/App/selectors';
import { deleteToken } from 'containers/App/actions';

import Nav from 'components/Nav';
import queryString from 'query-string';
import saga from './saga';
import reducer from './reducer';
import makeSelectArticlePage, { makeSelectArticle } from './selectors';

import { createComment, likeArticle, loadArticle } from './actions';

import ArticleContent from './ArticleContent';

/* eslint-disable react/prefer-stateless-function */
export class ArticlePage extends React.PureComponent {
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    this.props.handleLoadArticle({ id });
  }

  handleSubmitSearch = search => e => {
    if (e.key === 'Enter' && search !== '') {
      e.preventDefault();
      this.props.history.push(`/search?q=${search}`);
    }
  };

  render() {
    return (
      <div>
        <Nav {...this.props} handleSubmitSearch={this.handleSubmitSearch} />
        <ArticleContent {...this.props} />
      </div>
    );
  }
}

ArticlePage.propTypes = {
  // state variables
  // dispatch functions
};

const mapStateToProps = createStructuredSelector({
  articlePage: makeSelectArticlePage(),
  article: makeSelectArticle(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleCreateComment: comment => {
      // ignore empty comments
      if (comment.length > 0) dispatch(createComment(comment));
    },
    handleLoadArticle: query => {
      dispatch(loadArticle(query));
    },
    handleLikeArticle: () => {
      dispatch(likeArticle());
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

const withReducer = injectReducer({ key: 'articlePage', reducer });
const withSaga = injectSaga({ key: 'articlePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticlePage);
