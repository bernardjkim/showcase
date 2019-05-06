import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin-top: 10px;
  color: white;
  font-weight: 300;
` as typeof Button;

export const SubmitCommentButton: React.FC<Props> = props => {
  const { label, onClick } = props;
  return (
    <StyledButton color="primary" variant="contained" disableRipple={true} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

type Props = {
  label: string;
  onClick: () => void;
};
