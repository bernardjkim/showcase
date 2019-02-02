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
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

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
  // Content,
  ContentActions,
  ContentGitHub,
  ContentTop,
  Description,
  GitHub,
  StyledImage,
  StyledTextField,
  Title,
} from './components';

const Gallary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  background-color: #f5f5f5;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const ButtonComment = styled(Button)`
  color: white;
  font-weight: 300;
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
`;

const StyledChip = styled(Chip)`
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 17px;
  font-weight: 300;
`;

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
        <ContentTop>
          <Title>{article.get('title')}</Title>
          <ButtonNext onClick={handleLoadArticle}>{'Next >'}</ButtonNext>
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

        <Gallary>
          <StyledImage
            src={`${process.env.S3_URI}/${article.get('image')}`}
            alt="NotFound"
          />
        </Gallary>

        <DescriptionBox>
          <Description>{article.get('description')}</Description>
          <Tags>
            {article.get('tags').map(tag => (
              <StyledChip variant="outlined" key={uuid()} label={tag} />
            ))}
          </Tags>
        </DescriptionBox>

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
          <ButtonComment
            color="primary"
            variant="contained"
            disableRipple
            onClick={() => {
              const { comment } = this.state;
              this.setState({ comment: '' });
              return handleCreateComment(comment);
            }}
          >
            Comment
          </ButtonComment>
        </CommentBox>
        <CommentList>
          {article.get('comments') &&
            article.get('comments').map(root => (
              <li key={uuid()}>
                <CommentInfo>
                  <CommentUser>{root.getIn(['user', 'username'])} </CommentUser>
                  <CommentDate>
                    {moment(root.get('updated')).fromNow()}
                  </CommentDate>
                </CommentInfo>
                <CommentValue>{root.get('value')}</CommentValue>
                <br />
              </li>
            ))}
        </CommentList>
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
