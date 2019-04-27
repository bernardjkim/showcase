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
import { LikeList } from 'types';
import { ButtonAction, GitHub, HeaderContainer, HeaderDivLeft, HeaderDivRight, HeaderTitle } from './components';

const Header: React.SFC<Props> = props => {
  const { github, likes, title, uri } = props;

  const likedByUser = true;

  return (
    <HeaderContainer>
      <HeaderDivLeft>
        <HeaderTitle>{title.toUpperCase()}</HeaderTitle>
        <GitHub github={github} handleOpenRepo={openInNewTab(github)} />
      </HeaderDivLeft>
      <HeaderDivRight>
        <ButtonAction
          disabled={!!likedByUser}
          label={`Like ${likes.totalCount}`}
          handleClick={() => {
            return null;
          }}
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
  handleLikeArticle: () => {
    return null;
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    github: string;
    likes: LikeList;
    title: string;
    uri: string;
  };
