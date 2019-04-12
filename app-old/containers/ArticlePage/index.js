/**
 *
 * ArticlePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import queryString from 'query-string';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Globals */
import { makeSelectUser } from 'containers/App/selectors';
import { deleteToken } from 'containers/App/actions';

/* Shared Components */
import Nav from 'components/Nav';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { createComment, likeArticle, loadArticle } from './actions';
import makeSelectArticlePage, { makeSelectArticle } from './selectors';

/* Local Components */
import Header from './Header';
import Gallary from './Gallary';
import Info from './Info';
import Comments from './Comments';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
    const { article } = this.props;
    return (
      <Container>
        <Nav {...this.props} handleSubmitSearch={this.handleSubmitSearch} />
        {article && (
          <React.Fragment>
            <Header {...this.props} />
            <Gallary {...this.props} />
            <Info {...this.props} />
            <Comments {...this.props} />
          </React.Fragment>
        )}
      </Container>
    );
  }
}

ArticlePage.propTypes = {
  /* state */
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  article: PropTypes.oneOfType([
    ImmutablePropTypes.map.isRequired,
    PropTypes.bool,
  ]),
  /* function */
  handleLoadArticle: PropTypes.func.isRequired,
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
