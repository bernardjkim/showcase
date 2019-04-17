import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

export const StyledChip = styled(Chip)`
  height: 26px;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;

  span {
    padding-left: 8px;
    padding-right: 8px;
  }

  svg {
    font-size: 20px;
  }
` as typeof Chip;
