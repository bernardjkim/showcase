import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
`;

const ButtonAction = props => {
  /* state */
  const { disabled, label } = props;
  /* functions */
  const { handleClick } = props;

  return (
    <StyledButton disabled={disabled} variant="outlined" onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

ButtonAction.propTypes = {
  /* state */
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  /* functions */
  handleClick: PropTypes.func.isRequired,
};

export default ButtonAction;
