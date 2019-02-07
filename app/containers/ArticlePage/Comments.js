/**
 *
 * Comments
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
`;

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
    if (!this.props.user) this.props.history.push('/auth');
  };

  render() {
    const { article } = this.props;
    const { handleCreateComment } = this.props;

    if (!article) return null;

    return (
      <Container>
        <CommentForm
          value={this.state.comment}
          handleChange={this.handleChange}
          handleSubmit={handleCreateComment}
          handleUnAuthorized={this.handleRedirectAuth}
        />
        <CommentList comments={article.get('comments') || []} />
      </Container>
    );
  }
}

Comments.propTypes = {
  // state variables
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  article: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  history: PropTypes.object.isRequired,

  // dispatch functions
  handleCreateComment: PropTypes.func.isRequired,
};

export default Comments;
