import React from 'react';

import openInNewTab from 'utils/openInNewTab';

import { GallaryContainer, StyledImage } from './components';

type Props = {
  uri: string;
  image: string;
};

const Gallary: React.SFC<Props> = props => {
  const { uri, image } = props;

  return (
    <GallaryContainer>
      <StyledImage onClick={openInNewTab(uri)} src={image || require('images/not-found.gif')} alt="Image Not Found" />
    </GallaryContainer>
  );
};

export default Gallary;
