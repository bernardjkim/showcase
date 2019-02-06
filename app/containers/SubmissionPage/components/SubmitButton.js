import React from 'react';
import PropType from 'prop-types';
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
`;

const Label = styled(Typography)`
  color: white;
  font-weight: 300;
`;

const SubmitButton = props => {
  /* state */
  const { loading } = props;
  /* function */
  const { handleSubmit } = props;
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

SubmitButton.propTypes = {
  /* state */
  loading: PropType.bool.isRequired,
  /* functions */
  handleSubmit: PropType.func.isRequired,
};

export default SubmitButton;
