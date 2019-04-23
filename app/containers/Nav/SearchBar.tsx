import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@material-ui/core/InputAdornment';

import { NavContent, StyledTextField } from './components';

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
        placeholder="Search koblstone"
      />
    </NavContent>
  );
};

export default SearchBar;
