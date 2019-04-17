import queryString from 'query-string';
import React from 'react';
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

/* eslint-disable react/prefer-stateless-function */
class SearchResults extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    // update search state if location changes
    if (this.props.location !== prevProps.location) {
      this.updateSearchValue();
    }

    // update articles if search changes
    if (this.props.tags !== prevProps.tags) {
      this.props.handleLoadArticles();
    }

    // update articles if sort changes
    if (this.props.sort !== prevProps.sort) {
      this.props.handleLoadArticles();
    }
  }

  componentDidMount() {
    this.updateSearchValue();
    this.props.handleLoadArticles();
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
      this.props.handleRefresh();
    }

    // Checks that the page has scrolled to the bottom
    if (innerHeight + scrollTop === scrollHeight) {
      // this.props.handleScrollBottom();
      this.props.handleLoadNext();
    }
  };

  render() {
    const { articles } = this.props;

    return (
      <SearchResultsContainer>
        {articles && articles.map(article => <ArticleCard key={uuid()} article={article} />)}
      </SearchResultsContainer>
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleRefresh: () => dispatch(refresh()),
    handleLoadArticles: () => dispatch(loadArticlesAll()),
    handleLoadNext: () => dispatch(loadNext()),
    handleSetSearch: (search: string[]) => dispatch(setSearch(search)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(SearchResults));
