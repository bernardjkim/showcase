import React from 'react';
import uuid from 'uuid/v1';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

/* Shared Components */
import ArticleCard from 'components/ArticleCard';

/* Local Components */
import { SearchResultsContainer } from './components';
import { makeSelectArticles, makeSelectOffset } from './selectors';
import { loadArticlesAll, loadNext } from './actions';

/* eslint-disable react/prefer-stateless-function */
class SearchResults extends React.Component<Props> {
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
    const { articles, history, location, match } = this.props;
    const routeProps = { history, location, match };

    return (
      <SearchResultsContainer>
        {articles &&
          articles.map(article => (
            <ArticleCard key={uuid()} {...routeProps} article={article} />
          ))}
      </SearchResultsContainer>
    );
  }
}

type Props = RouteComponentProps<any> &
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const mapStateToProps = createStructuredSelector({
  articles: makeSelectArticles(),
  offset: makeSelectOffset(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleLoadArticles: () => dispatch(loadArticlesAll()),
    handleLoadNext: () => dispatch(loadNext()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchResults);
