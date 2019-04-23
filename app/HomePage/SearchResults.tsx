import gql from 'graphql-tag';
import queryString from 'query-string';
import React from 'react';
import { graphql, ChildDataProps } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import uuid from 'uuid/v1';

/* Shared Components */
import ArticleCard from 'components/ArticleCard';

/* Local Components */
import { loadArticlesAll, loadNext, refresh, setSearch } from './actions';
import { SearchResultsContainer } from './components';
import { makeSelectArticles, makeSelectOffset, makeSelectSort, makeSelectTags } from './selectors';

const ARTICLES_QUERY = gql`
  query GetArticles($input: ArticleSearchInput!) {
    articleSearch(input: $input) {
      totalCount
      edges {
        _id
        title
        uri
        github
        image
        description
        tags
      }
    }
  }
`;

type Response = {
  articleSearch: {
    totalCount: number;
    edges: any[];
  };
};

type InputProps = {
  tags: string[];
};

type Variables = {};

type ChildProps = ChildDataProps<{}, Response, Variables>;

const withArticles = graphql<InputProps, Response, Variables, ChildProps>(ARTICLES_QUERY, {
  options: ({ tags }) => ({
    variables: { input: { terms: tags.toString() } },
  }),
});

const Search = withArticles(({ data: { loading, articleSearch: articles, error, refetch } }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }
  return (
    <div>
      <button onClick={() => refetch()}>REFETCH</button>
      <SearchResultsContainer>
        {articles && articles.edges.map(article => <ArticleCard key={uuid()} article={article} />)}
      </SearchResultsContainer>
    </div>
  );
});

/* eslint-disable react/prefer-stateless-function */
class SearchResults extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    // update search state if location changes
    if (this.props.location !== prevProps.location) {
      this.updateSearchValue();
    }

    // // update articles if search/sort changes
    // if (this.props.tags !== prevProps.tags || this.props.sort !== prevProps.sort) {
    //   this.props.handleLoadArticles();
    // }
  }

  componentDidMount() {
    this.updateSearchValue();
    // this.props.handleLoadArticles();
    // Binds our scroll event handler
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Unbind scroll event handler
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateSearchValue() {
    const { term } = queryString.parse(this.props.location.search);
    const tags = term ? (term as string).split(',') : [];
    this.props.handleSetSearch(tags);
  }

  /**
   * Handles the scroll event
   */
  handleScroll = () => {
    const { innerHeight } = window;
    const { offsetHeight, scrollHeight, scrollTop } = document.documentElement;

    // Checks that the page has scrolled to the top
    if (innerHeight + scrollTop === offsetHeight) {
      // this.props.handleScrollTop();
      // TODO: refresh page on scroll top?
      // this.props.handleRefresh();
    }

    // Checks that the page has scrolled to the bottom
    if (innerHeight + scrollTop === scrollHeight) {
      // this.props.handleScrollBottom();
      // this.props.handleLoadNext();
    }
  };

  render() {
    // const { articles } = this.props;

    return (
      <div>
        <Search tags={this.state.tags} />
        {/* <SearchResultsContainer>
          {articles && articles.map(article => <ArticleCard key={uuid()} article={article} />)}
        </SearchResultsContainer> */}
      </div>
    );
  }
}

type Props = RouteComponentProps & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

const mapStateToProps = createStructuredSelector({
  articles: makeSelectArticles(),
  offset: makeSelectOffset(),
  tags: makeSelectTags(),
  sort: makeSelectSort(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleRefresh: () => dispatch(refresh()),
  handleLoadArticles: () => dispatch(loadArticlesAll()),
  handleLoadNext: () => dispatch(loadNext()),
  handleSetSearch: (search: string[]) => dispatch(setSearch(search)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(SearchResults));
