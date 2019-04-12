import React from 'react';
import styled from 'styled-components';

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
` as typeof TextField;

type Props = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.KeyboardEvent) => void;
};

const SearchBar: React.FC<Props> = props => {
  const { value, handleChange, handleSubmit } = props;

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

export default SearchBar;
