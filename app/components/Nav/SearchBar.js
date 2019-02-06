import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import NavContent from './components/NavContent';

const StyledTextField = styled(TextField)`
  width: 100%;
  div {
    height: 36px;

    fieldset {
      border-radius: 30px;
    }
  }
`;

const SearchBar = props => {
  /* state */
  const { value } = props;

  /* functions */
  const { handleChange, handleSubmit } = props;

  return (
    <NavContent>
      <StyledTextField
        color="primary"
        variant="outlined"
        onKeyPress={handleSubmit}
        onChange={handleChange}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon color="#8dd5c7" icon={faSearch} />
            </InputAdornment>
          ),
        }}
        placeholder="Search Showcase"
      />
    </NavContent>
  );
};
SearchBar.propTypes = {
  /* state */
  value: PropTypes.string.isRequired,

  /* functions */
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
