import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUser } from 'Root/selectors';

// import { createComment } from './actions';
import { CommentBox, StyledTextField, SubmitCommentButton } from './components';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
  comment: string;
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleCreateComment: (comment: string) => {
    // ignore empty comments
    if (comment.length > 0) {
      // dispatch(createComment(comment));
    }
  },
});

export class CommentForm extends React.Component<Props, State> {
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
    this.props.handleCreateComment(comment);
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(CommentForm));
