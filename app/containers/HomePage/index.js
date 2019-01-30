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

import { push } from 'connected-react-router/immutable';
import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage, { makeSelectArticle } from './selectors';

import { createComment, likeArticle, loadArticle } from './actions';

import HomeContent from './HomeContent';
import NavBar from './NavBar';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.handleLoadArticle();
  }

  render() {
    return (
      <div>
        <NavBar />
        <HomeContent {...this.props} />;
      </div>
    );
  }
}

HomePage.propTypes = {
  // state variables
  // article: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // dispatch functions
  // handleCreateComment: PropTypes.func.isRequired,
  // handleLikeArticle: PropTypes.func.isRequired,
  // handleLoadArticle: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  article: makeSelectArticle(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleHomePage: () => {
      dispatch(push('/'));
    },
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
