import gql from 'graphql-tag';

import { Article } from 'types';

export const ARTICLE_QUERY = gql`
  query GetArticle($id: String) {
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

export type ArticleQueryInput = { articleId: string };
export type ArticleQueryResponse = { article: Article };
export type ArticleQueryVariables = { id: string };
