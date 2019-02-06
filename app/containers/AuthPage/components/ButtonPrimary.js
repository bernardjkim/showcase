import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  color: white;
`;

const ButtonPrimary = props => {
  /* state */
  const { label } = props;
  /* functions */
  const { handleClick } = props;
  return (
    <StyledButton
      onClick={handleClick}
      color="primary"
      size="large"
      variant="contained"
    >
      {label}
    </StyledButton>
  );
};

ButtonPrimary.propTypes = {
  /* state */
  label: PropTypes.string.isRequired,
  /* functions */
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPrimary;
