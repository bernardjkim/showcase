import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  box-shadow: none;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0px;
  border-bottom: 1px solid #ceeae5;
` as typeof Card;
