import { fromJS } from 'immutable';
import {
  selectAuthPageDomain,
  makeSelectError,
  makeSelectLoading,
} from '../selectors';

const initialState = fromJS({
  loading: false,
  error: false,
});
describe('selectAuthPageDomain', () => {
  it('should select the auth page state', () => {
    expect(selectAuthPageDomain(initialState)).toMatchSnapshot();
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
