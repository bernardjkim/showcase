import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const GitHub = styled(Typography)`
  font-size: 18px;
  font-weight: 100;
  color: ${props => (props.private ? 'red' : 'green')};
  margin-left: 10px;

  :hover {
    text-decoration: ${props => !props.private && 'underline'};
  }
`;

export default GitHub;
