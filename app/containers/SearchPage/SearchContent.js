import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import uuid from 'uuid/v1';

import styled from 'styled-components';
import MediaCard from './MediaCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const ContainerCard = styled.div`
  width: calc(100% * (1 / 3) - 30px);
  height: 300px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

/* eslint-disable react/prefer-stateless-function */
class SearchContent extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <Container>
        {articles &&
          articles.map(article => (
            <ContainerCard key={uuid()}>
              <MediaCard article={article} />
            </ContainerCard>
          ))}
      </Container>
    );
  }
}

SearchContent.propTypes = {
  // state variables
  articles: PropTypes.oneOfType([
    ImmutablePropTypes.list.isRequired,
    PropTypes.bool,
  ]),

  // dispatch functions
};
export default SearchContent;
