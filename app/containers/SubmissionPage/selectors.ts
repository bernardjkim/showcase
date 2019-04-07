import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { SubmissionState } from './types';

/**
 * Direct selector to the submissionPage state domain
 */

const selectSubmissionPageDomain = (state: any): SubmissionState => {
  return state.get('submissionPage', initialState);
}

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(
    selectSubmissionPageDomain,
    // submissionState => submissionState.get('loading'),
    submissionState => submissionState.loading,
  );
const makeSelectError = () =>
  createSelector(
    selectSubmissionPageDomain,
    // submissionState => submissionState.get('error'),
    submissionState => submissionState.error,
  );
const makeSelectSubmissionSuccess = () =>
  createSelector(
    selectSubmissionPageDomain,
    // submissionState => submissionState.get('submissionSuccess'),
    submissionState => submissionState.submissionSuccess,
  );

/**
 * Default selector used by SubmissionPage
 */

const makeSelectSubmissionPage = () =>
  createSelector(
    selectSubmissionPageDomain,
    // substate => substate.toJS(),
    substate => substate,
  );

export default makeSelectSubmissionPage;
export {
  selectSubmissionPageDomain,
  makeSelectError,
  makeSelectLoading,
  makeSelectSubmissionSuccess,
};

