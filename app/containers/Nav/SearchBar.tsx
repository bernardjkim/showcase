import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

import { StyledTextField } from './components';

type Props = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.KeyboardEvent) => void;
};

const SearchBar: React.FC<Props> = props => {
  const { value, handleChange, handleSubmit } = props;

  return (
    <Grid item={true} xs={8} sm={6} lg={4}>
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
        placeholder="Search Koblstone"
      />
    </Grid>
  );
};

export default SearchBar;
