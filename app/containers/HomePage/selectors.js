import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(selectHomePageDomain, homeState => homeState.get('loading'));

const makeSelectError = () =>
  createSelector(selectHomePageDomain, homeState => homeState.get('error'));

const makeSelectArticles = () =>
  createSelector(selectHomePageDomain, homeState => homeState.get('articles'));

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectArticles,
  makeSelectError,
  makeSelectLoading,
};
