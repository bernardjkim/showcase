import gql from 'graphql-tag';

import { ArticleList } from 'types';

export const ARTICLE_SEARCH_QUERY = gql`
  query GetArticles($input: ArticleSearchInput!) {
    articleSearch(input: $input) {
      totalCount
      edges {
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
      }
    }
  }
`;

export type ArticleSearchInput = { tags: string[]; sort: string };
export type ArticleSearchResponse = { articleSearch: ArticleList };
export type ArticleSearchVariables = {
  input: {
    term: string;
    offset: number;
    sort: string;
  };
};
