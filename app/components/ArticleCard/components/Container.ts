import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 15px;

  @media (min-width: 800px) {
    width: calc(100% * (1 / 2) - 30px);
    height: 300px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    width: calc(100% * (1 / 3) - 30px);
    height: 300px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
