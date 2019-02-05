import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
  openInNewTab = url => () => {
    if (url !== '') {
      const win = window.open(url, '_blank');
      win.focus();
    }
  };

  render() {
    const { article } = this.props;
    const { handleViewComments } = this.props;
    return (
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia
            image={`${process.env.S3_URI}/${article.get('image')}`}
            title={article.get('title')}
            onClick={this.openInNewTab(article.get('uri'))}
          />
        </StyledCardActionArea>
        <StyledCardContent onClick={handleViewComments(article.get('_id'))}>
          <CardTitle gutterBottom>{article.get('title')}</CardTitle>
          <CardDescription gutterBottom>
            {article.get('description')}
          </CardDescription>
        </StyledCardContent>
      </StyledCard>
    );
  }
}
MediaCard.propTypes = {
  // state variables
  article: ImmutablePropTypes.map.isRequired,

  // dispatch functions
  handleViewComments: PropTypes.func.isRequired,
};
export default MediaCard;
