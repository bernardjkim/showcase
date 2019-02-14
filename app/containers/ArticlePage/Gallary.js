import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';

import openInNewTab from 'utils/openInNewTab';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  background-color: #f5f5f5;
`;

const StyledImage = styled.img`
  height: 400px;
  width: 640px;
`;

const Gallary = props => {
  /* state */
  const { article } = props;

  return (
    <Container>
      <StyledImage
        onClick={openInNewTab(article.get('uri'))}
        src={article.get('image')}
        alt="NotFound"
      />
    </Container>
  );
};

Gallary.propTypes = {
  /* state */
  article: PropTypes.oneOfType([
    ImmutablePropTypes.map.isRequired,
    PropTypes.bool,
  ]),
};

export default Gallary;
