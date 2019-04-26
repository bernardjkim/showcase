import { initialState } from '../reducer';
import { makeSelectTags, selectHomePageDomain } from '../selectors';

describe('selectHomePageDomain', () => {
  it('should select the home page state', () => {
    expect(selectHomePageDomain(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectTags', () => {
  const tagsSelector = makeSelectTags();
  it('should select the tags state', () => {
    expect(tagsSelector(initialState)).toMatchSnapshot();
  });
});
