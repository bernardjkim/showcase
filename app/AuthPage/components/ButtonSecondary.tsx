import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 100%;
` as typeof Button;

export const ButtonSecondary: React.FC<Props> = props => {
  const { label, handleClick } = props;
  return (
    <StyledButton onClick={handleClick} color="primary" variant="outlined">
      {label}
    </StyledButton>
  );
};

type Props = {
  label: string;
  handleClick: (e: React.MouseEvent) => void;
};
