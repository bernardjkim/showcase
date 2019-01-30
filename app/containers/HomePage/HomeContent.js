/**
 *
 * HomeContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import * as moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Button from '@material-ui/core/Button';

import {
  ButtonLike,
  ButtonNext,
  ButtonVisit,
  CommentBox,
  CommentDate,
  CommentUser,
  CommentInfo,
  CommentList,
  CommentValue,
  Container,
  Content,
  ContentActions,
  ContentGitHub,
  ContentTop,
  Description,
  GitHub,
  StyledImage,
  StyledTextField,
  Title,
} from './components';

/* eslint-disable react/prefer-stateless-function */
class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  openInNewTab = url => {
    if (url !== '') {
      const win = window.open(url, '_blank');
      win.focus();
    }
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    const { article } = this.props;
    const {
      handleCreateComment,
      handleLikeArticle,
      handleLoadArticle,
    } = this.props;

    if (!article) return null;

    return (
      <Container>
        <Content>
          <ContentTop>
            <Title>{article.get('title')}</Title>
            <ButtonNext onClick={handleLoadArticle}>Next</ButtonNext>
            <ContentActions>
              <ButtonLike variant="outlined" onClick={handleLikeArticle}>
                Like {article.get('likes')}
              </ButtonLike>
              <ButtonVisit
                variant="outlined"
                onClick={() => this.openInNewTab(article.get('uri'))}
              >
                Visit
              </ButtonVisit>
            </ContentActions>
          </ContentTop>

          <ContentGitHub>
            <FontAwesomeIcon size="lg" icon={faGithub} />{' '}
            <GitHub
              onClick={() => this.openInNewTab(article.get('github'))}
              private={article.get('github') ? 0 : 1}
            >
              {article.get('github') || 'private'}
            </GitHub>
          </ContentGitHub>

          <StyledImage
            src={`${process.env.S3_URI}/${article.get('image')}`}
            alt="NotFound"
          />

          <Description>{article.get('description')}</Description>
          <CommentBox>
            <StyledTextField
              multiline
              placeholder="Leave a Comment"
              rows={6}
              // variant="filled"
              fullWidth
              InputProps={{ disableUnderline: true }}
              onChange={this.handleChange}
              value={this.state.comment}
            />
            <Button
              mini
              variant="contained"
              disableRipple
              onClick={() => {
                const { comment } = this.state;
                this.setState({ comment: '' });
                return handleCreateComment(comment);
              }}
            >
              Comment
            </Button>
          </CommentBox>
          <CommentList>
            {article.get('comments') &&
              article.get('comments').map(root => (
                <li key={uuid()}>
                  <CommentInfo>
                    <CommentUser>
                      {root.getIn(['user', 'username'])}{' '}
                    </CommentUser>
                    <CommentDate>
                      {moment(root.get('updated')).fromNow()}
                    </CommentDate>
                  </CommentInfo>
                  <CommentValue>{root.get('value')}</CommentValue>
                  <br />
                </li>
              ))}
          </CommentList>
        </Content>
      </Container>
    );
  }
}

HomeContent.propTypes = {
  // state variables
  article: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  // dispatch functions
  handleCreateComment: PropTypes.func.isRequired,
  handleLikeArticle: PropTypes.func.isRequired,
  handleLoadArticle: PropTypes.func.isRequired,
};

export default HomeContent;
