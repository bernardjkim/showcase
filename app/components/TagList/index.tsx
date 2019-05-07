import React from 'react';
import uuid from 'uuid/v1';

import { StyledChip } from './components';

type Props = {
  tags: string[];
  handleDeleteTag?: (tag: string) => () => void;
};

const TagList: React.FC<Props> = props => {
  const { tags, handleDeleteTag } = props;

  return (
    <React.Fragment>
      {tags.map(tag => (
        <StyledChip
          variant="outlined"
          key={uuid()}
          label={tag.toUpperCase()}
          onDelete={handleDeleteTag ? handleDeleteTag(tag) : undefined}
        />
      ))}
    </React.Fragment>
  );
};

export default TagList;
