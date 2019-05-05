import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  box-shadow: 0 24px 36px -16px rgba(0, 0, 0, 0.14), 0px 4px 16px rgba(0, 0, 0, 0.08);
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0px;

  @media (min-width: 600px) {
    height: 300px;
  }
` as typeof Card;
