import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  &&::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }
`;
