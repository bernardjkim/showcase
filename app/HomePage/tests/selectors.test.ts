// import { fromJS } from 'immutable';
import {
  makeSelectArticles,
  makeSelectError,
  makeSelectLoading,
  makeSelectOffset,
  makeSelectSort,
  makeSelectTags,
  selectHomePageDomain,
} from '../selectors';

import { initialState } from '../reducer';

describe('selectHomePageDomain', () => {
  it('should select the home page state', () => {
    expect(selectHomePageDomain(initialState)).toMatchSnapshot();
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
  it('should select the artciles state', () => {
    expect(articlesSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectTags', () => {
  const tagsSelector = makeSelectTags();
  it('should select the tags state', () => {
    expect(tagsSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectOffset', () => {
  const offsetSelector = makeSelectOffset();
  it('should select the offset state', () => {
    expect(offsetSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectSort', () => {
  const sortSelector = makeSelectSort();
  it('should select the offset state', () => {
    expect(sortSelector(initialState)).toMatchSnapshot();
  });
});
