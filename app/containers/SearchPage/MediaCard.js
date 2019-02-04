import React from 'react';

import styled from 'styled-components';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const StyledCard = styled(Card)`
  box-shadow: none;
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

const StyledCardActionArea = styled(CardActionArea)`
  overflow: hidden;
`;

const CardTitle = styled(Typography)`
  font-weight: 500;
`;

/* eslint-disable property-no-vendor-prefix */
/* eslint-disable value-no-vendor-prefix */
const CardDescription = styled(Typography)`
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* eslint-disable react/prefer-stateless-function */
class MediaCard extends React.Component {
  render() {
    return (
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia
            image="https://d1ia71hq4oe7pn.cloudfront.net/og/75335251-1200px.jpg"
            title="Contemplative Reptile"
          />
        </StyledCardActionArea>
        <StyledCardContent>
          <CardTitle gutterBottom>Title</CardTitle>
          <CardDescription gutterBottom>
            Descrpition Descrpition Descrpition Descrpition Descrpition
            Descrpition Descrpition Descrpition Descrpition Descrpition
            Descrpition Descrpition Descrpition Descrpition
          </CardDescription>
        </StyledCardContent>
      </StyledCard>
    );
  }
}

export default MediaCard;
