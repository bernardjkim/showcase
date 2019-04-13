import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
` as typeof Button;

type Props = {
  disabled: boolean;
  label: string;
  handleClick: () => void;
};

export const ButtonAction: React.FC<Props> = props => {
  const { disabled, label, handleClick } = props;
  return (
    <StyledButton disabled={disabled} variant="outlined" onClick={handleClick}>
      {label}
    </StyledButton>
  );
};
