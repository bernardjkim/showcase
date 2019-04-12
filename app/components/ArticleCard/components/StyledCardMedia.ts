import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';

export const StyledCardMedia = styled(CardMedia)`
  height: 200px;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
` as typeof CardMedia;
