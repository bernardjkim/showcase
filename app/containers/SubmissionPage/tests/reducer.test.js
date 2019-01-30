import { fromJS } from 'immutable';
import submissionPageReducer from '../reducer';

describe('submissionPageReducer', () => {
  it('returns the initial state', () => {
    expect(submissionPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
