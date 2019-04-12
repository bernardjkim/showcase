import React from 'react';
import styled from 'styled-components';

import openInNewTab from 'utils/openInNewTab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Article } from 'types';

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
` as typeof Card;

const StyledCardActionArea = styled(CardActionArea)`
  overflow: hidden;
` as typeof CardActionArea;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
` as typeof CardMedia;

const StyledCardContent = styled(CardContent)`
  height: 100px;
` as typeof CardContent;

const CardTitle = styled(Typography)`
  font-weight: 500;
` as typeof Typography;

const CardDescription = styled(Typography)`
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
` as typeof Typography;

type Props = {
  article: Article;
  handleViewComments: (id: string) => () => void;
};

const Result: React.FC<Props> = props => {
  const { article, handleViewComments } = props;

  return (
    <Container>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia
            image={article.image}
            title={article.title}
            onClick={openInNewTab(article.uri)}
          />
        </StyledCardActionArea>
        <StyledCardContent onClick={handleViewComments(article._id)}>
          <CardTitle gutterBottom={true}>{article.title}</CardTitle>
          <CardDescription gutterBottom={true}>
            {article.description}
          </CardDescription>
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
};
export default Result;
