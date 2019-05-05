import queryString from 'query-string';
import React from 'react';
import { compose, graphql, ChildDataProps } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

// /* Shared Components */
import ArticleCard from 'components/ArticleCard';

// /* Local Components */
import { setOffset, setSearch, setUsername } from './actions';
import { ArticleSearchInput, ArticleSearchResponse, ArticleSearchVariables, ARTICLE_SEARCH_QUERY } from './queries';
import { makeSelectOffset, makeSelectSort, makeSelectTags, makeSelectUsername } from './selectors';

const Container = styled(Grid)`
  @media (min-width: 600px) {
    padding: 32px;
  }
` as typeof Grid;

class SearchResults extends React.PureComponent<SearchResultsProps> {
  // ===========================================================================
  //  LIFECYCLE
  // ===========================================================================
  componentDidMount() {
    this.updateSearchValue();
    // this.props.data.refetch();
    // Binds our scroll event handler
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Unbind scroll event handler
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps: SearchResultsProps) {
    // update search state if location changes
    if (this.props.location !== prevProps.location) {
      this.updateSearchValue();
    }
  }

  render() {
    const { articleSearch: articles } = this.props.data;
    return (
      <Container container={true} spacing={32}>
        {articles &&
          articles.edges.map(article => (
            <ArticleCard key={article._id} article={article} likes={article.likes.totalCount} />
          ))}
      </Container>
    );
  }

  // ===========================================================================
  //  UTIL
  // ===========================================================================

  /**
   * This function will grab the query term/username from the current location
   * and save it to the HomePage state.
   */
  updateSearchValue() {
    const { term, username } = queryString.parse(this.props.location.search);
    const tags = term ? (term as string).split(',') : [];
    this.props.handleSetSearch(tags);
    this.props.handleSetUsername(username as string);
    window.scrollTo(0, 0);
  }

  /**
   * This is where to add handler functions for when a user scrolls to the top
   * or bottom of the component.
   */
  handleScroll = () => {
    const { innerHeight, pageYOffset } = window;
    const { offsetHeight, scrollHeight } = document.documentElement;

    // Handle scroll top
    if (innerHeight + pageYOffset <= offsetHeight) {
      // Refresh?
    }

    // Handle scroll bottom
    if (innerHeight + pageYOffset >= scrollHeight - 50) {
      this.onFetchMore();
    }
  };

  /**
   * This function will fetch the next page (max 10) of articles and append them
   * to the prev state.
   * GIST: https://gist.github.com/kkemple/bececb840c99b47a2e25f8086f15f056
   */
  onFetchMore = () => {
    const {
      tags,
      sort,
      username,
      data: { articleSearch: articles, fetchMore },
    } = this.props;

    fetchMore({
      variables: { input: { term: tags.toString(), offset: articles!.totalCount, sort, username } },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const articleSearch = { ...previousResult.articleSearch };

        // remove potential duplicates
        const ids = new Set(articleSearch.edges.map(article => article._id));
        for (const article of fetchMoreResult!.articleSearch.edges) {
          if (!ids.has(article._id)) {
            ids.add(article._id);
            articleSearch.edges.push(article);
          }
        }
        articleSearch.totalCount = articleSearch.edges.length;
        return { ...previousResult, articleSearch };
      },
    });
  };
}

// =============================================================================
//  HOC
// =============================================================================
const withArticleSearch = graphql<ArticleSearchInput, ArticleSearchResponse, ArticleSearchVariables, {}>(
  ARTICLE_SEARCH_QUERY,
  {
    options: ({ tags, sort, username }) => ({
      variables: { input: { term: tags.toString(), offset: 0, sort, username } },
    }),
    props: ({ data }) => {
      const props = { data: data! };
      return props;
    },
  },
);

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags(),
  offset: makeSelectOffset(),
  sort: makeSelectSort(),
  username: makeSelectUsername(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSetOffset: (offset: number) => dispatch(setOffset(offset)),
  handleSetSearch: (search: string[]) => dispatch(setSearch(search)),
  handleSetUsername: (username: string) => dispatch(setUsername(username)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
  withArticleSearch,
)(SearchResults);

// =============================================================================
//  TYPES
// =============================================================================
type SearchResultsProps = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  ChildDataProps<{}, ArticleSearchResponse>;
