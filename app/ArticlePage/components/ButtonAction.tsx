import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin-left: 5px;
  margin-right: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
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
