/**
 *
 * Comments
 *
 */

import React from 'react';

import { CommentsContainer, CommentForm, CommentList } from './components';

/* eslint-disable react/prefer-stateless-function */
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleRedirectAuth = () => {
    if (!this.props.user) {
      this.props.history.push('/auth');
    }
  };

  handleCreateComment = () => {
    this.props.handleCreateComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    /* state */
    const { article } = this.props;

    if (!article) {
      return null;
    }

    return (
      <CommentContainer>
        <CommentForm
          value={this.state.comment}
          handleChange={this.handleChange}
          handleSubmit={this.handleCreateComment}
          handleUnAuthorized={this.handleRedirectAuth}
        />
        <CommentList comments={article.get('comments') || []} />
      </CommentContainer>
    );
  }
}

// Comments.propTypes = {
//   /* state */
//   user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
//   article: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
//   history: PropTypes.object.isRequired,
//   /* functions */
//   handleCreateComment: PropTypes.func.isRequired,
// };

export default Comments;
