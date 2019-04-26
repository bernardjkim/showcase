import gql from 'graphql-tag';

import { Article } from 'types';

export const ARTICLE_QUERY = gql`
  query GetArticle($id: ID) {
    article(id: $id) {
      _id
      title
      uri
      github
      image
      description
      tags
      likes {
        totalCount
      }
      comments {
        totalCount
      }
    }
  }
`;

export type ArticleSearchResponse = { article: Article };
export type ArticleSearchVariables = { id: string };
