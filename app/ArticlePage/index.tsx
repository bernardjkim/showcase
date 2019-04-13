/**
 *
 * ArticlePage
 *
 */

import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

/* Utils */
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* Locals */
import { loadArticle } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectArticlePage, { makeSelectArticle, makeSelectComments, makeSelectLikes } from './selectors';
import { Query } from './types';

/* Local Components */
import CommentForm from './CommentForm';
import Gallary from './Gallary';
import Header from './Header';
import Info from './Info';
import { ArticlePageContainer, CommentsContainer, CommentList } from './components';

const mapStateToProps = createStructuredSelector({
  articlePage: makeSelectArticlePage(),
  article: makeSelectArticle(),
  comments: makeSelectComments(),
  likes: makeSelectLikes(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLoadArticle: (query: Query) => dispatch(loadArticle(query)),
});

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

/* eslint-disable react/prefer-stateless-function */
export class ArticlePage extends React.PureComponent<Props> {
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    this.props.handleLoadArticle({ id: id as string });
  }

  render() {
    const { article, comments, likes } = this.props;
    return (
      <ArticlePageContainer>
        {article && (
          <React.Fragment>
            <Header github={article.github} likes={likes} title={article.title} uri={article.uri} />
            <Gallary uri={article.uri} image={article.image} />
            <Info description={article.description} tags={article.tags} />
            <CommentsContainer>
              <CommentForm />
              <CommentList comments={comments} />
            </CommentsContainer>
          </React.Fragment>
        )}
      </ArticlePageContainer>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'articlePage', reducer });
const withSaga = injectSaga({ key: 'articlePage', saga, mode: '' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticlePage);
