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
import image from 'images/ptrade.png';

import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage from './selectors';

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
  render() {
    const comments = [
      {
        comment: {
          name: 'Guest1',
          value:
            'Web application for trading stocks with a mock portfolio. The goal was to provide a simple platform for new investors to learn about the stock market without any risk.',
          comment: {
            name: 'Guest2',
            value: 'Comment Comment Comment',
            comment: undefined,
          },
        },
      },
      {
        comment: {
          name: 'Guest3',
          value: 'Comment Comment Comment Comment',
          comment: undefined,
        },
      },
    ];
    return (
      <Container>
        <Content>
          <ContentTop>
            <Title variant="p">PTrade</Title>
            <Button>Next</Button>
            <ContentActions>
              <Button variant="outlined">Like</Button>
              <Button variant="outlined">Visit</Button>
            </ContentActions>
          </ContentTop>

          <GitHub>https://github.com/bernardjkim/ptrade</GitHub>

          <StyledImage src={image} alt="NotFound" />

          <Description variant="p">
            Web application for trading stocks with a mock portfolio. The goal
            was to provide a simple platform for new investors to learn about
            the stock market without any risk.
          </Description>
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
              {comments.map(root => (
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
