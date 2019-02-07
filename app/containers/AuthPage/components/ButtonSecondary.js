import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonSecondary = props => {
  /* state */
  const { label } = props;
  /* functions */
  const { handleClick } = props;
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

ButtonSecondary.propTypes = {
  /* state */
  label: PropTypes.string.isRequired,
  /* functions */
  handleClick: PropTypes.func.isRequired,
};

export default ButtonSecondary;
