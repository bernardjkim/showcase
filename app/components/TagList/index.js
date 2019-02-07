import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import uuid from 'uuid/v1';

import List from './components/List';
import StyledChip from './components/StyledChip';

const TagList = props => {
  /* state */
  const { tags } = props;
  /* fuctions */
  const { handleDeleteTag } = props;

  return (
    <List>
      {tags.map(tag => (
        <StyledChip
          variant="outlined"
          key={uuid()}
          label={tag}
          onDelete={handleDeleteTag(tag)}
        />
      ))}
    </List>
  );
};

TagList.propTypes = {
  /* state */
  tags: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.instanceOf(Immutable.Iterable),
  ]).isRequired,
  /* fuctions */
  handleDeleteTag: PropTypes.func.isRequired,
};

export default TagList;
