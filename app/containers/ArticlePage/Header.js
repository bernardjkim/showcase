/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import openInNewTab from 'utils/openInNewTab';

import GitHub from './components/GitHub';
import ButtonAction from './components/ButtonAction';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled(Typography)`
  font-size: 40px;
  font-weight: 100;
`;

const Header = props => {
  /* state */
  const { article } = props;
  /* functions */
  const { handleLikeArticle } = props;

  return (
    <Container>
      <ContainerLeft>
        <Title>{article.get('title')}</Title>
        <GitHub
          github={article.get('github')}
          handleOpenRepo={openInNewTab(article.get('github'))}
        />
      </ContainerLeft>
      <ContainerRight>
        <ButtonAction
          disabled={article.get('likedByUser')}
          label={`Like ${article.get('likes')}`}
          handleClick={handleLikeArticle}
        />
        <ButtonAction
          disabled={false}
          label="Visit"
          handleClick={openInNewTab(article.get('uri'))}
        />
      </ContainerRight>
    </Container>
  );
};

Header.propTypes = {
  /* state */
  article: PropTypes.oneOfType([
    ImmutablePropTypes.map.isRequired,
    PropTypes.bool,
  ]),
  /* functions */
  handleLikeArticle: PropTypes.func.isRequired,
};

export default Header;
