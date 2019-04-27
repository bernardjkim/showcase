/*
 *
 * ArticlePage reducer
 *
 */

import { ArticleActionTypes, ArticleState, SET_ARTICLE_ID } from './types';

// The initial state of the App
export const initialState: ArticleState = {
  articleId: undefined,
};

function articlePageReducer(state: ArticleState = initialState, action: ArticleActionTypes) {
  switch (action.type) {
    case SET_ARTICLE_ID:
      return {
        ...state,
        articleId: action.articleId,
      };

    default:
      return state;
  }
}

export default articlePageReducer;
