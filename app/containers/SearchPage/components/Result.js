import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';

// import Typography from '@material-ui/core/Typography';

import openInNewTab from 'utils/openInNewTab';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const Container = styled.div`
  width: calc(100% * (1 / 3) - 30px);
  height: 300px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StyledCard = styled(Card)`
  box-shadow: none;
`;

const StyledCardActionArea = styled(CardActionArea)`
  overflow: hidden;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;

const StyledCardContent = styled(CardContent)`
  height: 100px;
`;

const CardTitle = styled(Typography)`
  font-weight: 500;
`;

const CardDescription = styled(Typography)`
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Result = props => {
  /* state */
  const { article } = props;
  /* functions */
  const { handleViewComments } = props;

  return (
    <Container>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia
            image={`${process.env.S3_URI}/${article.get('image')}`}
            title={article.get('title')}
            onClick={openInNewTab(article.get('uri'))}
          />
        </StyledCardActionArea>
        <StyledCardContent onClick={handleViewComments(article.get('_id'))}>
          <CardTitle gutterBottom>{article.get('title')}</CardTitle>
          <CardDescription gutterBottom>
            {article.get('description')}
          </CardDescription>
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
};

Result.propTypes = {
  /* state */
  article: ImmutablePropTypes.map.isRequired,
  /* functions */
  handleViewComments: PropTypes.func.isRequired,
};

export default Result;
