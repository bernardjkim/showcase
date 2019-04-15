import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ProfileState } from './types';

/**
 * Direct selector to the profilePage state domain
 */

const selectProfilePageDomain = (state: any): ProfileState =>
  state.get ? state.get('profilePage', initialState) : initialState;

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(
    selectProfilePageDomain,
    profileState => profileState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectProfilePageDomain,
    profileState => profileState.error,
  );

/**
 * Default selector used by ProfilePage
 */

const makeSelectProfilePage = () =>
  createSelector(
    selectProfilePageDomain,
    substate => substate,
  );

export default makeSelectProfilePage;
export { selectProfilePageDomain, makeSelectError, makeSelectLoading };
