import React from 'react';

import TagList from 'components/TagList';
import { ContainerTags, Description, DescriptionBox, InfoContainer } from './components';

type Props = {
  description: string;
  tags: string[];
};

const Info: React.SFC<Props> = props => {
  const { description, tags } = props;
  return (
    <InfoContainer>
      <DescriptionBox>
        <Description>{description}</Description>
        <ContainerTags>
          <TagList tags={tags} />
        </ContainerTags>
      </DescriptionBox>
    </InfoContainer>
  );
};

export default Info;
