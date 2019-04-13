/**
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import openInNewTab from 'utils/openInNewTab';

import { makeSelectUser } from 'Root/selectors';
import { likeArticle } from './actions';
import { ButtonAction, GitHub, HeaderContainer, HeaderDivLeft, HeaderDivRight, HeaderTitle } from './components';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    github: string;
    likes: any[];
    title: string;
    uri: string;
  };

const Header: React.SFC<Props> = props => {
  const { github, likes, title, uri, user, handleLikeArticle } = props;

  const likedByUser = likes && user ? likes.filter(like => like.user === user._id.size > 0) : false;

  return (
    <HeaderContainer>
      <HeaderDivLeft>
        <HeaderTitle>{title}</HeaderTitle>
        <GitHub github={github} handleOpenRepo={openInNewTab(github)} />
      </HeaderDivLeft>
      <HeaderDivRight>
        <ButtonAction
          disabled={!!likedByUser}
          label={`Like ${likes ? likes.length : 0}`}
          handleClick={handleLikeArticle}
        />
        <ButtonAction disabled={false} label="Visit" handleClick={openInNewTab(uri)} />
      </HeaderDivRight>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLikeArticle: () => dispatch(likeArticle()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);
