import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const ErrorMessage = styled(Typography)`
  color: red;
  width: 80%;
  margin-top: 10px;
  font-weight: 300;
  display: ${props => (props.hidden ? 'none' : 'block')};
` as typeof Typography;
