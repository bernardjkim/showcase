import { initialState } from '../reducer';
import { makeSelectError, makeSelectLoading, selectSubmissionPageDomain } from '../selectors';

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
