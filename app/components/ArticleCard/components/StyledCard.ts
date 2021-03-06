import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  box-shadow: none;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  :hover {
    border: 1px solid #ceece7;
  }
` as typeof Card;
