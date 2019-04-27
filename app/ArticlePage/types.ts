export interface ArticleState {
  articleId?: string;
}
// =============================================================================
//  ACTIONS
// =============================================================================

export const SET_ARTICLE_ID = 'app/ArticlePage/ SET_ARTICLE_ID';

export interface SetArticleIdAction {
  type: typeof SET_ARTICLE_ID;
  articleId: string;
}

export type ArticleActionTypes = SetArticleIdAction;
