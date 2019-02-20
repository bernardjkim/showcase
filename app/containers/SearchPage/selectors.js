import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchPage state domain
 */

const selectSearchPageDomain = state => state.get('searchPage', initialState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(selectSearchPageDomain, searchState =>
    searchState.get('loading'),
  );

const makeSelectError = () =>
  createSelector(selectSearchPageDomain, searchState =>
    searchState.get('error'),
  );

const makeSelectArticles = () =>
  createSelector(selectSearchPageDomain, searchState =>
    searchState.get('articles'),
  );

const makeSelectOffset = () =>
  createSelector(selectSearchPageDomain, searchState =>
    searchState.get('offset'),
  );

const makeSelectSearch = () =>
  createSelector(selectSearchPageDomain, searchState =>
    searchState.get('search'),
  );

/**
 * Default selector used by SearchPage
 */

const makeSelectSearchPage = () =>
  createSelector(selectSearchPageDomain, substate => substate.toJS());

export default makeSelectSearchPage;
export {
  selectSearchPageDomain,
  makeSelectArticles,
  makeSelectError,
  makeSelectLoading,
  makeSelectOffset,
  makeSelectSearch,
};
