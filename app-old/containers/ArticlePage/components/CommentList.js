import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import uuid from 'uuid/v1';
import * as moment from 'moment';

/* MUI */
import Typography from '@material-ui/core/Typography';

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const User = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-right: 10px;
`;

const Date = styled(Typography)`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
`;

const List = styled.ul`
  width: 100%;
  list-style-type: none;
  border-top: solid 1px;
  padding-top: 25px;
  padding-left: 0px;
  border-color: #d2eeea;
`;

const Value = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  margin-top: 5px;
`;

const CommentList = props => {
  /* state */
  const { comments } = props;
  return (
    <List>
      {comments.map(root => (
        <li key={uuid()}>
          <ContainerInfo>
            <User>{root.getIn(['user', 'username'])} </User>
            <Date>{moment(root.get('updated')).fromNow()}</Date>
          </ContainerInfo>
          <Value>{root.get('value')}</Value>
          <br />
        </li>
      ))}
    </List>
  );
};

CommentList.propTypes = {
  /* state */
  comments: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.instanceOf(Immutable.Iterable),
  ]).isRequired,
};

export default CommentList;
