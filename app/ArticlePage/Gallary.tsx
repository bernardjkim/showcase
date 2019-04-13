import React from 'react';

import openInNewTab from 'utils/openInNewTab';

const Gallary = props => {
  /* state */
  const { article } = props;

  return (
    <GallaryContainer>
      <StyledImage
        onClick={openInNewTab(article.get('uri'))}
        src={article.get('image') || require('../../images/not-found.gif')} // eslint-disable-line global-require
        alt="Image Not Found"
      />
    </GallaryContainer>
  );
};

// Gallary.propTypes = {
//   /* state */
//   article: PropTypes.oneOfType([
//     ImmutablePropTypes.map.isRequired,
//     PropTypes.bool,
//   ]),
// };

export default Gallary;
