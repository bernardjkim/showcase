import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import uuid from 'uuid/v1';
import styled from 'styled-components';

import Result from './Result';

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

/* eslint-disable react/prefer-stateless-function */
class SearchResults extends React.Component {
  render() {
    /* state */
    const { articles } = this.props;
    /* functions */
    const { handleViewComments } = this.props;
    return (
      <Container>
        {articles &&
          articles.map(article => (
            <Result
              key={uuid()}
              article={article}
              handleViewComments={handleViewComments}
            />
          ))}
      </Container>
    );
  }
}

SearchResults.propTypes = {
  /* state */
  articles: PropTypes.oneOfType([
    ImmutablePropTypes.list.isRequired,
    PropTypes.bool,
  ]),
  /* functions */
  handleViewComments: PropTypes.func.isRequired,
};
export default SearchResults;
