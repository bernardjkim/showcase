import queryString from 'query-string';
import React from 'react';
import { compose, graphql, ChildDataProps } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

// /* Shared Components */
import ArticleCard from 'components/ArticleCard';

// /* Local Components */
import { setSearch } from './actions';
import { SearchResultsContainer } from './components';
import { ArticleSearchInput, ArticleSearchResponse, ArticleSearchVariables, ARTICLE_SEARCH_QUERY } from './queries';
import { makeSelectSort, makeSelectTags } from './selectors';

class SearchResults extends React.Component<SearchResultsProps> {
  // ===========================================================================
  //  LIFECYCLE
  // ===========================================================================
  componentDidMount() {
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
    const { articleSearch: articles, loading } = this.props.data;
    if (loading) {
      return 'Loading...';
    }
    return (
      <div>
        <SearchResultsContainer>
          {articles &&
            articles.edges.map(article => (
              <ArticleCard key={article._id} article={article} likes={article.likes.totalCount} />
            ))}
        </SearchResultsContainer>
      </div>
    );
  }

  // ===========================================================================
  //  UTIL
  // ===========================================================================

  /**
   * This function will grab the query 'term' from the current location and
   * save it to the HomePage state.
   */
  updateSearchValue() {
    const { term } = queryString.parse(this.props.location.search);
    const tags = term ? (term as string).split(',') : [];
    this.props.handleSetSearch(tags);
  }

  /**
   * This is where to add handler functions for when a user scrolls to the top
   * or bottom of the component.
   */
  handleScroll = () => {
    const { innerHeight } = window;
    const { offsetHeight, scrollHeight, scrollTop } = document.documentElement;

    // Handle scroll top
    if (innerHeight + scrollTop === offsetHeight) {
      // Refresh?
    }

    // Handle scroll bottom
    if (innerHeight + scrollTop === scrollHeight) {
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
      data: { articleSearch, fetchMore },
    } = this.props;

    fetchMore({
      variables: { input: { term: tags.toString(), offset: articleSearch!.totalCount, sort } },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const { articleSearch: articles } = previousResult;
        articles.edges = articles.edges.concat(fetchMoreResult!.articleSearch.edges);
        articles.totalCount = articles.edges.length;
        return { ...previousResult, articleSearch: articles };
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
    options: ({ tags, sort }) => ({
      variables: { input: { term: tags.toString(), offset: 0, sort } },
    }),
    props: ({ data }) => {
      const props = { data: data! };
      return props;
    },
  },
);

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags(),
  sort: makeSelectSort(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSetSearch: (search: string[]) => dispatch(setSearch(search)),
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
