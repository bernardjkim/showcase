import TextField from '@material-ui/core/TextField';
import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  label {
    color: #57c1ae;
  }
` as typeof TextField;

export const FormInput: React.FC<Props> = props => {
  const { onChange, ...rest } = props;
  return <StyledTextField onChange={onChange} fullWidth={true} margin="dense" {...rest} />;
};

type Props = {
  label: string;
  type: string;
  autoFocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
