import { fromJS } from 'immutable';

import { initialState } from '../reducer';
import { makeSelectLocation, makeSelectUser, selectGlobalDomain } from '../selectors';

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    });
    expect(locationStateSelector(mockedState)).toEqual(mockedState.getIn(['router', 'location']).toJS());
  });
});

describe('selectGlobalDomain', () => {
  it('should select the global state', () => {
    expect(selectGlobalDomain(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectUser', () => {
  const userSelector = makeSelectUser();
  it('should select the user state', () => {
    expect(userSelector(initialState)).toMatchSnapshot();
  });
});
