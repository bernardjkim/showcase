import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const LongText = styled(Typography)`
  font-size: 20px;
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
  }
` as typeof Typography;
