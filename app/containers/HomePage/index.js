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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Button from '@material-ui/core/Button';

import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage, { makeSelectArticle } from './selectors';

import { loadArticle } from './actions';

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
  componentDidMount() {
    this.props.handleLoadArticle();
  }

  render() {
    const { article } = this.props;

    if (!article) return null;

    return (
      <Container>
        <Content>
          <ContentTop>
            <Title>{article.title}</Title>
            <Button>Next</Button>
            <ContentActions>
              <Button variant="outlined">Like</Button>
              <Button variant="outlined">Visit</Button>
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
            />
            <Button mini variant="contained" disableRipple>
              Comment
            </Button>
          </CommentBox>
          <CommentList>
            <ul>
              {article.comments.map(root => (
                <li key={uuid()}>
                  {root.comment.name}
                  <br />
                  {root.comment.value}
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
  handleLoadArticle: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  article: makeSelectArticle(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLoadArticle: () => {
      dispatch(loadArticle());
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
