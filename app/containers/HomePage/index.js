/**
 *
 * HomePage
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
import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage, { makeSelectArticle } from './selectors';

import { createComment, likeArticle, loadArticle } from './actions';

import HomeContent from './HomeContent';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.handleLoadArticle();
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
        <HomeContent {...this.props} />
      </div>
    );
  }
}

HomePage.propTypes = {
  // state variables
  // dispatch functions
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  article: makeSelectArticle(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleCreateComment: comment => {
      // ignore empty comments
      if (comment.length > 0) dispatch(createComment(comment));
    },
    handleLoadArticle: () => {
      dispatch(loadArticle());
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

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
