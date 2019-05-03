/**
 *
 * Header
 *
 */

import gql from 'graphql-tag';
import React from 'react';
import { compose, graphql, ChildDataProps } from 'react-apollo';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import openInNewTab from 'utils/openInNewTab';

import { makeSelectUser } from 'Root/selectors';
import { Like, LikeList } from 'types';
import { ButtonAction, GitHub, HeaderContainer, HeaderDivLeft, HeaderDivRight, HeaderTitle } from './components';

const Header: React.SFC<HeaderProps> = props => {
  const { user, github, likes, title, uri, submit, articleId } = props;

  const likedByUser = user ? likes.edges.filter(like => like.user._id === user._id).length > 0 : true;

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
          handleClick={() => submit(articleId, true)}
        />
        <ButtonAction disabled={false} label="Visit" handleClick={openInNewTab(uri)} />
      </HeaderDivRight>
    </HeaderContainer>
  );
};

export const CREATE_LIKE = gql`
  mutation CreateLike($article: ID, $value: Boolean) {
    createLike(input: { article: $article, value: $value }) {
      _id
      value
      updated
    }
  }
`;

export type CreateLikeInput = {};

export type CreateLikeResponse = {
  createLike: Like;
};

export type CreateLikeVariables = {
  article: string;
  value: boolean;
};

export type ChildProps = {
  submit: (article: string, value: boolean) => void;
};

const withLikeMutation = graphql<CreateLikeInput, CreateLikeResponse, CreateLikeVariables, ChildProps>(CREATE_LIKE, {
  props: ({ mutate }) => ({
    submit: (article: string, value: boolean) =>
      mutate!({ variables: { article, value }, refetchQueries: ['GetArticle'] }),
  }),
});

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withLikeMutation,
)(Header);

type HeaderProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    articleId: string;
    github: string;
    likes: LikeList;
    title: string;
    uri: string;
  } & ChildDataProps<ChildProps, CreateLikeResponse>;
