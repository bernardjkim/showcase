import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { HomeState } from './types';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = (state: any): HomeState =>
  state.get('homePage', initialState);

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.error,
  );

const makeSelectArticles = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.articles,
  );

const makeSelectOffset = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.offset,
  );

const makeSelectSearch = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.search,
  );

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectArticles,
  makeSelectError,
  makeSelectLoading,
  makeSelectOffset,
  makeSelectSearch,
};
