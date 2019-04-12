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
  const { article, user } = props;
  /* functions */
  const { handleLikeArticle } = props;

  const title = article.get('title');
  const github = article.get('github');
  const uri = article.get('uri');
  const likes = article.get('likes');
  const likedByUser =
    likes && user
      ? likes.filter(like => like.get('user') === user.get('_id')).size > 0
      : false;

  return (
    <Container>
      <ContainerLeft>
        <Title>{title}</Title>
        <GitHub github={github} handleOpenRepo={openInNewTab(github)} />
      </ContainerLeft>
      <ContainerRight>
        <ButtonAction
          disabled={likedByUser}
          label={`Like ${likes ? likes.size : 0}`}
          handleClick={handleLikeArticle}
        />
        <ButtonAction
          disabled={false}
          label="Visit"
          handleClick={openInNewTab(uri)}
        />
      </ContainerRight>
    </Container>
  );
};

Header.propTypes = {
  /* state */
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  article: PropTypes.oneOfType([
    ImmutablePropTypes.map.isRequired,
    PropTypes.bool,
  ]).isRequired,
  /* functions */
  handleLikeArticle: PropTypes.func.isRequired,
};

export default Header;
