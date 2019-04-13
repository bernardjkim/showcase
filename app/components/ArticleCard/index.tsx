import React from 'react';

import openInNewTab from 'utils/openInNewTab';
import { Article } from 'types';

import { RouteComponentProps, withRouter } from 'react-router';

import {
  CardDescription,
  CardTitle,
  Container,
  StyledCard,
  StyledCardActionArea,
  StyledCardContent,
  StyledCardMedia,
} from './components';

type Props = RouteComponentProps & {
  article: Article;
};

const Result: React.FC<Props> = props => {
  const { article } = props;

  const handleViewArticle = (id: string) => () => {
    props.history.push(`/article?id=${id}`);
  };

  return (
    <Container>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia image={article.image} title={article.title} onClick={openInNewTab(article.uri)} />
        </StyledCardActionArea>
        <StyledCardContent onClick={handleViewArticle(article._id)}>
          <CardTitle gutterBottom={true}>{article.title}</CardTitle>
          <CardDescription gutterBottom={true}>{article.description}</CardDescription>
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
};
export default withRouter(Result);
