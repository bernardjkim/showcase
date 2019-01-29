import { fromJS } from 'immutable';
import {
  selectHomePageDomain,
  makeSelectArticle,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';

const initialState = fromJS({
  loading: false,
  error: false,
  article: false,
});

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

describe('makeSelectArticle', () => {
  const articleSelector = makeSelectArticle();
  it('should select the article state', () => {
    expect(articleSelector(initialState)).toMatchSnapshot();
  });
});
