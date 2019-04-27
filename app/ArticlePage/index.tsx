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

/* Locals */
import { graphql, ChildDataProps } from 'react-apollo';
import { setArticleId } from './actions';
import { ArticleQueryInput, ArticleQueryResponse, ArticleQueryVariables, ARTICLE_QUERY } from './queries';
import reducer from './reducer';
import makeSelectArticlePage, { makeSelectArticleId } from './selectors';

/* Local Components */
import CommentForm from './CommentForm';
import Gallary from './Gallary';
import Header from './Header';
import Info from './Info';
import { ArticlePageContainer, CommentsContainer, CommentList } from './components';

export class ArticlePage extends React.PureComponent<ArticlePageProps> {
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    this.props.handleSetArticleId(id as string);
  }

  render() {
    const { article } = this.props.data;
    return (
      <ArticlePageContainer>
        {article && (
          <React.Fragment>
            <Header github={article.github} likes={article.likes} title={article.title} uri={article.uri} />
            <Gallary uri={article.uri} image={article.image} />
            <Info description={article.description} tags={article.tags} />
            <CommentsContainer>
              <CommentForm />
              <CommentList comments={article.comments} />
            </CommentsContainer>
          </React.Fragment>
        )}
      </ArticlePageContainer>
    );
  }
}

// =============================================================================
//  HOC
// =============================================================================
const withArticleQuery = graphql<ArticleQueryInput, ArticleQueryResponse, ArticleQueryVariables, {}>(ARTICLE_QUERY, {
  options: ({ articleId }) => ({
    variables: { id: articleId },
  }),
  props: ({ data }) => {
    const props = { data: data! };
    return props;
  },
});

const mapStateToProps = createStructuredSelector({
  articlePage: makeSelectArticlePage(),
  articleId: makeSelectArticleId(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSetArticleId: (id: string) => dispatch(setArticleId(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'articlePage', reducer });

export default compose(
  withReducer,
  withConnect,
  withArticleQuery,
)(ArticlePage);

// =============================================================================
//  TYPES
// =============================================================================
type ArticlePageProps = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  ChildDataProps<{}, ArticleQueryResponse>;
