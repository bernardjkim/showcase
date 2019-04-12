import { initialState } from '../reducer';
import {
  selectSearchPageDomain,
  makeSelectArticles,
  makeSelectError,
  makeSelectLoading,
  makeSelectSearch,
  makeSelectOffset,
} from '../selectors';

describe('selectSearchPageDomain', () => {
  it('should select the search page state', () => {
    expect(selectSearchPageDomain(initialState)).toMatchSnapshot();
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

describe('makeSelectArticles', () => {
  const articlesSelector = makeSelectArticles();
  it('should select the articles state', () => {
    expect(articlesSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectSearch', () => {
  const searchSelector = makeSelectSearch();
  it('should select the search state', () => {
    expect(searchSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectOffset', () => {
  const offsetSelector = makeSelectOffset();
  it('should select the offset state', () => {
    expect(offsetSelector(initialState)).toMatchSnapshot();
  });
});
