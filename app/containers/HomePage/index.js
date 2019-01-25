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
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import image from 'images/ptrade.png';

import { Typography } from '@material-ui/core';
import uuid from 'uuid/v1';
import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage from './selectors';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  max-width: 1080px;
`;

const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const ContentActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`;

const Title = styled(Typography)`
  font-size: 40px;
  font-weight: 100;
`;

const GitHub = styled(Typography)`
  width: 100%;
  font-size: 20px;
  font-weight: 100;
  color: green;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const Description = styled(Typography)`
  margin-bottom: 20px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border: solid 2px;
  border-radius: 5px;
  border-color: #d0caba;
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  padding-left: 10px;
  padding-right: 10px;
`;

const CommentList = styled.div`
  width: 100%;
  height: 50%;
`;

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
