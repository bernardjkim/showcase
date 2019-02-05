import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the articlePage state domain
 */

const selectArticlePageDomain = state => state.get('articlePage', initialState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(selectArticlePageDomain, articleState =>
    articleState.get('loading'),
  );

const makeSelectError = () =>
  createSelector(selectArticlePageDomain, articleState =>
    articleState.get('error'),
  );

const makeSelectArticle = () =>
  createSelector(selectArticlePageDomain, articleState =>
    articleState.get('article'),
  );

/**
 * Default selector used by ArticlePage
 */

const makeSelectArticlePage = () =>
  createSelector(selectArticlePageDomain, substate => substate.toJS());

export default makeSelectArticlePage;
export {
  selectArticlePageDomain,
  makeSelectArticle,
  makeSelectLoading,
  makeSelectError,
};
