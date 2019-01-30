import { fromJS } from 'immutable';
import {
  selectSubmissionPageDomain,
  makeSelectError,
  makeSelectLoading,
} from '../selectors';

const initialState = fromJS({
  loading: false,
  error: false,
});

describe('selectSubmissionPageDomain', () => {
  it('should select the submission page state', () => {
    expect(selectSubmissionPageDomain(initialState)).toMatchSnapshot();
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
