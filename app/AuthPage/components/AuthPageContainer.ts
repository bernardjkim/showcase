import styled from 'styled-components';

export const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media (min-width: 460px) {
    height: 100vh;
    min-width: 460px;
    width: 460px;
    padding-bottom: 50px;
  }
`;
