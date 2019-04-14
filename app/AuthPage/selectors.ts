import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { AuthState } from './types';

/**
 * Direct selector to the AuthPage state domain
 */

const selectAuthPageDomain = (state: any): AuthState =>
  state.get ? state.get('authPage', initialState) : initialState;

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(
    selectAuthPageDomain,
    authState => authState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectAuthPageDomain,
    authState => authState.error,
  );

/**
 * Default selector used by AuthPage
 */

const makeSelectAuthPage = () =>
  createSelector(
    selectAuthPageDomain,
    substate => substate,
  );

export default makeSelectAuthPage;
export { selectAuthPageDomain, makeSelectError, makeSelectLoading };
