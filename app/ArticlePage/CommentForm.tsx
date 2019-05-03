import gql from 'graphql-tag';
import React from 'react';
import { compose, graphql, ChildDataProps } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUser } from 'Root/selectors';

import { CommentBox, StyledTextField, SubmitCommentButton } from './components';
import { makeSelectArticleId } from './selectors';

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
    const { handleChange, handleUnauthorized, handleCreateComment } = this;
    const { comment } = this.state;
    return (
      <CommentBox onClick={handleUnauthorized}>
        <StyledTextField
          multiline={true}
          placeholder="Leave a Comment"
          rows={6}
          fullWidth={true}
          InputProps={{ disableUnderline: true }}
          onChange={handleChange}
          value={comment}
        />
        <SubmitCommentButton label="Comment" onClick={handleCreateComment(comment)}>
          Comment
        </SubmitCommentButton>
      </CommentBox>
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
