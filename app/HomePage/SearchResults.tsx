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
import { loadArticlesAll, loadNext, setSearch } from './actions';
import { SearchResultsContainer } from './components';
import { makeSelectArticles, makeSelectOffset, makeSelectSearch } from './selectors';

/* eslint-disable react/prefer-stateless-function */
class SearchResults extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    // update search state if location changes
    if (this.props.location !== prevProps.location) {
      this.updateSearchValue();
    }

    // update articles if search changes
    if (this.props.search !== prevProps.search) {
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
    this.props.handleSetSearch((term as string) || '');
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
  search: makeSelectSearch(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleLoadArticles: () => dispatch(loadArticlesAll()),
    handleLoadNext: () => dispatch(loadNext()),
    handleSetSearch: (search: string) => dispatch(setSearch(search)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(SearchResults));
