import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const ShortText = styled(Typography)`
  font-size: 20px;
  @media (min-width: 600px) {
    display: none;
  }
` as typeof Typography;
