import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the submissionPage state domain
 */

const selectSubmissionPageDomain = state =>
  state.get('submissionPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(selectSubmissionPageDomain, submissionState =>
    submissionState.get('loading'),
  );
const makeSelectError = () =>
  createSelector(selectSubmissionPageDomain, submissionState =>
    submissionState.get('error'),
  );

/**
 * Default selector used by SubmissionPage
 */

const makeSelectSubmissionPage = () =>
  createSelector(selectSubmissionPageDomain, substate => substate.toJS());

export default makeSelectSubmissionPage;
export { selectSubmissionPageDomain, makeSelectError, makeSelectLoading };
