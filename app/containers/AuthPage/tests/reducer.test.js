import { fromJS } from 'immutable';
import AuthPageReducer from '../reducer';

describe.skip('AuthPageReducer', () => {
  it('returns the initial state', () => {
    expect(AuthPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
