import { fromJS } from 'immutable';
import {
  selectSearchPageDomain,
  makeSelectArticles,
  makeSelectError,
  makeSelectLoading,
} from '../selectors';

const initialState = fromJS({
  loading: false,
  error: false,
  articles: false,
});

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
