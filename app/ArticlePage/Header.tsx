/**
 *
 * Header
 *
 */

import React from 'react';

import openInNewTab from 'utils/openInNewTab';

import GitHub from './components/GitHub';
import ButtonAction from './components/ButtonAction';

const Header = props => {
  /* state */
  const { article, user } = props;
  /* functions */
  const { handleLikeArticle } = props;

  const title = article.get('title');
  const github = article.get('github');
  const uri = article.get('uri');
  const likes = article.get('likes');
  const likedByUser = likes && user ? likes.filter(like => like.get('user') === user.get('_id')).size > 0 : false;

  return (
    <HeaderContainer>
      <HeaderDivLeft>
        <HeaderTitle>{title}</HeaderTitle>
        <GitHub github={github} handleOpenRepo={openInNewTab(github)} />
      </HeaderDivLeft>
      <HeaderDivRight>
        <ButtonAction disabled={likedByUser} label={`Like ${likes ? likes.size : 0}`} handleClick={handleLikeArticle} />
        <ButtonAction disabled={false} label="Visit" handleClick={openInNewTab(uri)} />
      </HeaderDivRight>
    </HeaderContainer>
  );
};

// Header.propTypes = {
//   /* state */
//   user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
//   article: PropTypes.oneOfType([ImmutablePropTypes.map.isRequired, PropTypes.bool]).isRequired,
//   /* functions */
//   handleLikeArticle: PropTypes.func.isRequired,
// };

export default Header;
