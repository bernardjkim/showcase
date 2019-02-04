import React from 'react';

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
    return (
      <Container>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
        <ContainerCard>
          <MediaCard />
        </ContainerCard>
      </Container>
    );
  }
}

export default SearchContent;
