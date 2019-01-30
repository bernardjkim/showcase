import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.get('router');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

/**
 * Direct selector to the global state domain
 */

const selectGlobalDomain = state => state.get('global', initialState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(selectGlobalDomain, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobalDomain, globalState => globalState.get('error'));

const makeSelectToken = () =>
  createSelector(selectGlobalDomain, globalState => globalState.get('token'));

/**
 * Default selector used by App
 */

const makeSelectApp = () =>
  createSelector(selectGlobalDomain, substate => substate.toJS());

export default makeSelectApp;
export {
  makeSelectLocation,
  selectGlobalDomain,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError,
};
