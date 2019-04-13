import React from 'react';
import Button from '@material-ui/core/Button';

export const ButtonSecondary: React.FC<Props> = props => {
  const { label, handleClick } = props;
  return (
    <Button
      onClick={handleClick}
      color="primary"
      size="large"
      variant="outlined"
    >
      {label}
    </Button>
  );
};

type Props = {
  label: string;
  handleClick: (e: React.MouseEvent) => void;
};
