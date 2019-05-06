import gql from 'graphql-tag';
import React from 'react';
import { compose, graphql, ChildDataProps } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectUser } from 'Root/selectors';

import { SubmitCommentButton } from './components';
import { makeSelectArticleId } from './selectors';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export const Container = styled(Grid)`
  margin-top: 20px;
` as typeof Grid;

export class CommentForm extends React.Component<CommentFormProps, State> {
  readonly state: State = {
    comment: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ comment: e.target.value });
  };

  handleUnauthorized = () => {
    if (!this.props.user) {
      this.props.history.push('/auth');
    }
  };

  handleCreateComment = (comment: string) => () => {
    if (comment.length <= 0) {
      return;
    }
    const { articleId, submit } = this.props;
    submit(articleId!, comment);
    this.setState({ comment: '' });
  };

  render() {
    const { handleChange, handleCreateComment } = this;
    const { comment } = this.state;
    return (
      <Container item={true} container={true} xs={12}>
        <TextField value={comment} placeholder="Comment" onChange={handleChange} multiline={true} fullWidth={true} />
        <Grid container={true} justify="flex-end">
          <SubmitCommentButton label="Comment" onClick={handleCreateComment(comment)}>
            Comment
          </SubmitCommentButton>
        </Grid>
      </Container>
    );
  }
}

export const CREATE_COMMENT = gql`
  mutation CreateComment($article: ID, $value: String) {
    createComment(input: { article: $article, value: $value }) {
      _id
      value
      updated
    }
  }
`;

export type CreateCommentInput = {};

export type CreateCommentResponse = {
  createComment: Comment;
};

export type CreateCommentVariables = {
  article: string;
  value: string;
};

export type ChildProps = {
  submit: (article: string, value: string) => void;
};

const withArticleQuery = graphql<CreateCommentInput, CreateCommentResponse, CreateCommentVariables, ChildProps>(
  CREATE_COMMENT,
  {
    props: ({ mutate }) => ({
      submit: (article: string, value: string) =>
        mutate!({ variables: { article, value }, refetchQueries: ['GetArticle'] }),
    }),
  },
);

type State = {
  comment: string;
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  articleId: makeSelectArticleId(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
  withArticleQuery,
)(CommentForm);

type CommentFormProps = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  ChildDataProps<ChildProps, CreateCommentResponse>;
