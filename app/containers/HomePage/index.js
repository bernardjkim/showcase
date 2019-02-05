/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Nav from 'components/Nav';
import { deleteToken } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';
import makeSelectHomePage, { makeSelectArticles } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomeContent from './HomeContent';
import { loadArticlesAll } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.handleLoadArticles();
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
    return (
      <div>
        <Nav {...this.props} handleSubmitSearch={this.handleSubmitSearch} />
        <HomeContent
          {...this.props}
          handleViewComments={this.handleViewComments}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  // state variables
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  location: PropTypes.object.isRequired,
  articles: PropTypes.oneOfType([
    ImmutablePropTypes.list.isRequired,
    PropTypes.bool,
  ]),

  // dispatch functions
  handleLoadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  user: makeSelectUser(),
  articles: makeSelectArticles(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLoadArticles: () => {
      dispatch(loadArticlesAll());
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
