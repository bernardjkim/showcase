import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import { Article } from 'types';
import openInNewTab from 'utils/openInNewTab';

import { Container, StyledCard, StyledCardActionArea, StyledCardContent, StyledCardMedia } from './components';

type Props = RouteComponentProps & {
  article: Article;
  likes: number;
};

const Result: React.SFC<Props> = props => {
  const { article, likes } = props;

  const handleViewArticle = (id: string) => () => {
    props.history.push(`/article?id=${id}`);
  };

  return (
    <Container>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia image={article.image} title={article.title} onClick={openInNewTab(article.uri)} />
        </StyledCardActionArea>
        <StyledCardContent
          handleViewArticle={handleViewArticle(article._id)}
          title={`${article.title} ${likes}`}
          description={article.description}
          tags={article.tags}
        />
      </StyledCard>
    </Container>
  );
};
export default withRouter(Result);
