import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const StyledTextField = styled(TextField)`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;

  label {
    color: #57c1ae;
    font-size: 17px;
  }
` as typeof TextField;
