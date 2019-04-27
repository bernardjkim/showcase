import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ArticleState } from './types';

/**
 * Direct selector to the articlePage state domain
 */

const selectArticlePageDomain = (state: any): ArticleState =>
  state.get ? state.get('articlePage', initialState) : initialState;

/**
 * Other specific selectors
 */

const makeSelectArticleId = () =>
  createSelector(
    selectArticlePageDomain,
    articleState => articleState.articleId,
  );

/**
 * Default selector used by ArticlePage
 */

const makeSelectArticlePage = () =>
  createSelector(
    selectArticlePageDomain,
    substate => substate,
  );

export default makeSelectArticlePage;
export { selectArticlePageDomain, makeSelectArticleId };
