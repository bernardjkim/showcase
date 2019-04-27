/*
 *
 * ArticlePage actions
 *
 */

import { ArticleActionTypes, SET_ARTICLE_ID } from './types';

export function setArticleId(articleId: string): ArticleActionTypes {
  return {
    type: SET_ARTICLE_ID,
    articleId,
  };
}
