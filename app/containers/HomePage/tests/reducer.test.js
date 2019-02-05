import { fromJS } from 'immutable';
import homePageReducer from '../reducer';

describe.skip('homePageReducer', () => {
  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
