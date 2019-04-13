import React from 'react';
import uuid from 'uuid/v1';

import { List, StyledChip } from './components';

type Props = {
  tags: string[];
  handleDeleteTag: (tag: string) => () => void;
};

const TagList: React.FC<Props> = props => {
  const { tags, handleDeleteTag } = props;

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

export default TagList;
