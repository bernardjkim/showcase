import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
// import styled from 'styled-components';

import { Article } from 'types';
import openInNewTab from 'utils/openInNewTab';

import Grid from '@material-ui/core/Grid';

import { StyledCard, StyledCardActionArea, StyledCardContent, StyledCardMedia } from './components';

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
    <Grid item={true} xs={12} sm={6} md={4} lg={3} xl={2}>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia
            component="img"
            image={article.image}
            title={article.title}
            onClick={openInNewTab(article.uri)}
          />
        </StyledCardActionArea>
        <StyledCardContent
          handleViewArticle={handleViewArticle(article._id)}
          title={`${article.title} ${likes}`}
          description={article.description}
          tags={article.tags}
        />
      </StyledCard>
    </Grid>
  );
};
export default withRouter(Result);
