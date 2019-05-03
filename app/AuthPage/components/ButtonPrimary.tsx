import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  color: white;
` as typeof Button;

export const ButtonPrimary: React.FC<Props> = props => {
  const { label, handleClick } = props;
  return (
    <StyledButton color="primary" variant="contained" onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

type Props = {
  label: string;
  handleClick: (e: React.MouseEvent) => void;
};
