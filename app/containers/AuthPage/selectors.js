import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the AuthPage state domain
 */

const selectAuthPageDomain = state => state.get('authPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(selectAuthPageDomain, authState => authState.get('loading'));

const makeSelectError = () =>
  createSelector(selectAuthPageDomain, authState => authState.get('error'));

/**
 * Default selector used by AuthPage
 */

const makeSelectAuthPage = () =>
  createSelector(selectAuthPageDomain, substate => substate.toJS());

export default makeSelectAuthPage;
export { selectAuthPageDomain, makeSelectError, makeSelectLoading };
