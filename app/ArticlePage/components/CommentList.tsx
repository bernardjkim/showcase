import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

import { CommentList as CommentListType } from 'types';

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
` as typeof Typography;

const Date = styled(Typography)`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
` as typeof Typography;

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
` as typeof Typography;

export const CommentList: React.SFC<Props> = props => {
  const { comments } = props;
  return (
    <List>
      {comments.edges &&
        comments.edges.map(comment => (
          <li key={comment._id}>
            <ContainerInfo>
              <User>{comment.user.username} </User>
              <Date>{moment(comment.updated).fromNow()}</Date>
            </ContainerInfo>
            <Value>{comment.value}</Value>
            <br />
          </li>
        ))}
    </List>
  );
};

type Props = {
  comments: CommentListType;
};
