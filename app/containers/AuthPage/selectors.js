import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the AuthPage state domain
 */

const selectAuthPageDomain = state => state.get('AuthPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthPage
 */

const makeSelectAuthPage = () =>
  createSelector(selectAuthPageDomain, substate => substate.toJS());

export default makeSelectAuthPage;
export { selectAuthPageDomain };
