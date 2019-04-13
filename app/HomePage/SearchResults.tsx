import React from 'react';
import uuid from 'uuid/v1';
import queryString from 'query-string';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

/* Shared Components */
import ArticleCard from 'components/ArticleCard';

/* Local Components */
import { SearchResultsContainer } from './components';
import { makeSelectArticles, makeSelectOffset, makeSelectSearch } from './selectors';
import { loadArticlesAll, loadNext, setSearch } from './actions';

/* eslint-disable react/prefer-stateless-function */
class SearchResults extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    // update search state if location changes
    if (this.props.location !== prevProps.location) {
      const { term } = queryString.parse(this.props.location.search);
      this.props.handleSetSearch((term as string) || '');
    }

    // update articles if search changes
    if (this.props.search !== prevProps.search) {
      this.props.handleLoadArticles();
    }
  }

  componentDidMount() {
    this.props.handleLoadArticles();
    // Binds our scroll event handler
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Unbind scroll event handler
    window.removeEventListener('scroll', this.handleScroll);
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
