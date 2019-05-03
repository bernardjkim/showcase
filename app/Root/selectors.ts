import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { RootState } from './types';

const selectRouter = (state: any) => state.get('router');

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.get('location').toJS(),
  );

/**
 * Direct selector to the global state domain
 */

const selectGlobalDomain = (state: any): RootState => (state.get ? state.get('global', initialState) : initialState);

/**
 * Other specific selectors
 */

const makeSelectUser = () =>
  createSelector(
    selectGlobalDomain,
    globalState => globalState.user,
  );

/**
 * Default selector used by App
 */

const makeSelectApp = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate,
  );

export default makeSelectApp;
export { makeSelectLocation, selectGlobalDomain, makeSelectUser };
