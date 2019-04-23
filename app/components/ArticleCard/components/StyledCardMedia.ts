import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';

export const StyledCardMedia = styled(CardMedia)`
  height: 200px;
  transition: transform 0.15s;
  :hover {
    transform: scale(1.05);
  }
` as typeof CardMedia;
