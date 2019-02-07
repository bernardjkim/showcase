import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import TagList from 'components/TagList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Description = styled(Typography)`
  text-align: center;
  font-size: 17px;
  line-height: 170%;
`;

const ContainerTags = styled.div`
  margin-top: 10px;
`;

const Info = props => {
  /* state */
  const { article } = props;

  return (
    <Container>
      <DescriptionBox>
        <Description>{article.get('description')}</Description>
        <ContainerTags>
          <TagList tags={article.get('tags')} handleDeleteTag={() => {}} />
        </ContainerTags>
      </DescriptionBox>
    </Container>
  );
};

Info.propTypes = {
  /* state */
  article: PropTypes.oneOfType([ImmutablePropTypes.map, PropTypes.bool])
    .isRequired,
};

export default Info;
