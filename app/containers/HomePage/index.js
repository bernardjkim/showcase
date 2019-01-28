/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import uuid from 'uuid/v1';
import * as moment from 'moment';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Button from '@material-ui/core/Button';

import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage, { makeSelectArticle } from './selectors';

import { createComment, likeArticle, loadArticle } from './actions';

import {
  CommentBox,
  CommentList,
  Container,
  Content,
  ContentActions,
  ContentTop,
  Description,
  GitHub,
  StyledImage,
  StyledTextField,
  Title,
} from './components';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  componentDidMount() {
    this.props.handleLoadArticle();
  }

  componentDidUpdate() {}

  openInNewTab = () => {
    const win = window.open(this.props.article.uri, '_blank');
    win.focus();
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
            <Title>{article.title}</Title>
            <Button onClick={handleLoadArticle}>Next</Button>
            <ContentActions>
              <Button variant="outlined" onClick={handleLikeArticle}>
                Like {article.likes}
              </Button>
              <Button variant="outlined" onClick={this.openInNewTab}>
                Visit
              </Button>
            </ContentActions>
          </ContentTop>

          <GitHub>{article.github || 'private'}</GitHub>

          <StyledImage
            src={`${process.env.S3_URI}/${article.image}`}
            alt="NotFound"
          />

          <Description>{article.description}</Description>
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
            <ul>
              {article.comments &&
                article.comments.map(root => (
                  <li key={uuid()}>
                    {root.user.username} {moment(root.updated).fromNow()}
                    <br />
                    {root.value}
                  </li>
                ))}
            </ul>
          </CommentList>
        </Content>
      </Container>
    );
  }
}

HomePage.propTypes = {
  // state variables
  article: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  // dispatch functions
  handleCreateComment: PropTypes.func.isRequired,
  handleLikeArticle: PropTypes.func.isRequired,
  handleLoadArticle: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  article: makeSelectArticle(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleCreateComment: comment => {
      // ignore empty comments
      if (comment.length > 0) {
        dispatch(createComment(comment));
      }
    },
    handleLoadArticle: () => {
      dispatch(loadArticle());
    },
    handleLikeArticle: () => {
      dispatch(likeArticle());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
