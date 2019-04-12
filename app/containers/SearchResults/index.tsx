import React from 'react';
import uuid from 'uuid/v1';
import styled from 'styled-components';

import Result from './Result';

import { Article } from 'types';
import { RouteComponentProps } from 'react-router';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 64px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

type Props = RouteComponentProps<any> & {
  articles: Article[];
  handleScrollBottom: () => void;
};

/* eslint-disable react/prefer-stateless-function */
class SearchResults extends React.Component<Props> {
  componentDidMount() {
    // Binds our scroll event handler
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Unbind scroll event handler
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleViewArticle = (id: string) => () => {
    this.props.history.push(`/article?id=${id}`);
  };

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
      this.props.handleScrollBottom();
    }
  };

  render() {
    const { handleViewArticle } = this;
    const { articles } = this.props;

    return (
      <Container>
        {articles &&
          articles.map(article => (
            <Result
              key={uuid()}
              article={article}
              handleViewComments={handleViewArticle}
            />
          ))}
      </Container>
    );
  }
}

export default SearchResults;
