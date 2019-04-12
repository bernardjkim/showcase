import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  span {
    height: 36px;
  }
` as typeof Button;

const Label = styled(Typography)`
  color: white;
  font-weight: 300;
` as typeof Typography;

type Props = {
  loading: boolean;
  handleSubmit: (e: React.MouseEvent) => void;
};

const SubmitButton: React.FC<Props> = props => {
  const { loading, handleSubmit } = props;
  return (
    <StyledButton
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      disabled={!!loading}
    >
      {loading ? (
        <CircularProgress size={26} thickness={8.0} />
      ) : (
        <Label>Submit</Label>
      )}
    </StyledButton>
  );
};

export default SubmitButton;
