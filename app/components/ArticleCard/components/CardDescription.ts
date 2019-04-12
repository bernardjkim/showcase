import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const CardDescription = styled(Typography)`
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
` as typeof Typography;
