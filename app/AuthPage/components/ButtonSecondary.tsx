import Button from '@material-ui/core/Button';
import React from 'react';

export const ButtonSecondary: React.FC<Props> = props => {
  const { label, handleClick } = props;
  return (
    <Button onClick={handleClick} color="primary" variant="outlined">
      {label}
    </Button>
  );
};

type Props = {
  label: string;
  handleClick: (e: React.MouseEvent) => void;
};
