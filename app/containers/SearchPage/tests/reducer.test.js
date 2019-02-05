import { fromJS } from 'immutable';
import searchPageReducer from '../reducer';

describe.skip('searchPageReducer', () => {
  it('returns the initial state', () => {
    expect(searchPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
