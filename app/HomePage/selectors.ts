import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { HomeState } from './types';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = (state: any): HomeState =>
  state.get ? state.get('homePage', initialState) : initialState;

/**
 * Other specific selectors
 */

const makeSelectOffset = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.offset,
  );

const makeSelectTags = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.tags,
  );

const makeSelectSort = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.sort,
  );

const makeSelectUsername = () =>
  createSelector(
    selectHomePageDomain,
    homeState => homeState.username,
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
export { selectHomePageDomain, makeSelectOffset, makeSelectTags, makeSelectSort, makeSelectUsername };
