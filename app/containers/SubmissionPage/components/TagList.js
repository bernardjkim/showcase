import React from 'react';
import PropType from 'prop-types';
import uuid from 'uuid/v1';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledChip = styled(Chip)`
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 17px;
  font-weight: 300;
`;

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
  tags: PropType.array.isRequired,
  /* fuctions */
  handleDeleteTag: PropType.func.isRequired,
};

export default TagList;
