import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ArticleState } from './types';

/**
 * Direct selector to the articlePage state domain
 */

const selectArticlePageDomain = (state: any): ArticleState => state.get('articlePage', initialState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectArticlePageDomain,
    articleState => articleState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectArticlePageDomain,
    articleState => articleState.error,
  );

const makeSelectArticle = () =>
  createSelector(
    selectArticlePageDomain,
    articleState => articleState.article,
  );

const makeSelectComments = () =>
  createSelector(
    selectArticlePageDomain,
    articleState => articleState.comments,
  );

const makeSelectLikes = () =>
  createSelector(
    selectArticlePageDomain,
    articleState => articleState.likes,
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
export {
  selectArticlePageDomain,
  makeSelectArticle,
  makeSelectComments,
  makeSelectLikes,
  makeSelectLoading,
  makeSelectError,
};
