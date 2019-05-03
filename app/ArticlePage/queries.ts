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
        edges {
          _id
          user {
            _id
          }
          value
        }
      }
      comments {
        totalCount
        edges {
          _id
          user {
            _id
            username
          }
          value
        }
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($article: ID, $value: String) {
    createComment(input: { article: $article, value: $value }) {
      _id
      value
      updated
    }
  }
`;

export type ArticleQueryInput = { articleId: string };
export type ArticleQueryResponse = { article: Article };
export type ArticleQueryVariables = { id: string };
