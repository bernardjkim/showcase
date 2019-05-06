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
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* Utils */
import injectReducer from 'utils/injectReducer';
import openInNewTab from 'utils/openInNewTab';

/* Locals */
import { graphql, ChildDataProps } from 'react-apollo';
import { setArticleId } from './actions';
import { ArticleQueryInput, ArticleQueryResponse, ArticleQueryVariables, ARTICLE_QUERY } from './queries';
import reducer from './reducer';
import makeSelectArticlePage, { makeSelectArticleId } from './selectors';

/* Local Components */
import CommentForm from './CommentForm';
// import Gallary from './Gallary';
// import Header from './Header';
// import Info from './Info';
import { CommentList } from './components';

const Container = styled(Grid)`
  margin-top: 48px;
  padding: 20px;
` as typeof Grid;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const GridPaper = styled(Grid)`
  box-shadow: 0 24px 36px -16px rgba(0, 0, 0, 0.14), 0px 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
` as typeof Grid;

export const Title = styled(Typography)`
  margin-top: 20px;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 500;
` as typeof Typography;

export const Description = styled(Typography)`
  margin-top: 20px;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.75;
` as typeof Typography;

export class ArticlePage extends React.PureComponent<ArticlePageProps> {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = queryString.parse(this.props.location.search);
    this.props.handleSetArticleId(id as string);
  }

  render() {
    const { article } = this.props.data;
    if (!article) {
      return '404 Not Found';
    }
    return (
      <Container container={true} spacing={40} justify="center" direction="row-reverse">
        <Grid item={true} container={true} xs={12} sm={10} md={4}>
          <GridPaper component={Paper} item={true} container={true} xs={12} justify="center" alignContent="flex-start">
            <Grid item={true} xs={10}>
              <Typography>username: [username]</Typography>
            </Grid>
            <Grid item={true} xs={10}>
              <Typography>github: {article.github}</Typography>
            </Grid>
            <Grid item={true} xs={10}>
              <Typography>link: {article.uri}</Typography>
            </Grid>
          </GridPaper>
        </Grid>
        <Grid item={true} container={true} xs={12} sm={10} md={8}>
          <GridPaper component={Paper} container={true} item={true} xs={12} justify="center">
            <Grid item={true} xs={12}>
              <StyledImage onClick={openInNewTab(article.uri)} src={article.image} alt="Image Not Found" />
            </Grid>
            <Grid item={true} xs={10}>
              <Title>{article.title}</Title>
            </Grid>
            <Grid item={true} xs={10}>
              <Description>{article.description}</Description>
            </Grid>
            <Grid item={true} xs={10}>
              <Description>[ACTIONS(LIKE, SHARE, FLAG,...)]</Description>
            </Grid>
            <Grid item={true} xs={10}>
              <CommentForm />
              <CommentList comments={article.comments} />
            </Grid>
          </GridPaper>
        </Grid>
      </Container>
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
