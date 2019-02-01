import { fromJS } from 'immutable';

import {
  selectGlobalDomain,
  makeSelectLocation,
  makeSelectValidateToken,
  makeSelectUser,
  makeSelectError,
  makeSelectLoading,
} from 'containers/App/selectors';

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    });
    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    );
  });
});

const initialState = fromJS({
  loading: false,
  error: false,
  user: false,
  validateToken: true,
});

describe('selectGlobalDomain', () => {
  it('should select the global state', () => {
    expect(selectGlobalDomain(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading state', () => {
    expect(loadingSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error state', () => {
    expect(errorSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectValidateToken', () => {
  const validateTokenSelector = makeSelectValidateToken();
  it('should select the token state', () => {
    expect(validateTokenSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectUser', () => {
  const userSelector = makeSelectUser();
  it('should select the user state', () => {
    expect(userSelector(initialState)).toMatchSnapshot();
  });
});
