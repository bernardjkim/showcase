import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const StyledTextField = styled(TextField)`
  width: 100%;
  div {
    height: 36px;

    fieldset {
      border-radius: 30px;
    }
  }
` as typeof TextField;
