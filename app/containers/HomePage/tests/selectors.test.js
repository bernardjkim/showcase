import { fromJS } from 'immutable';
import { selectHomePageDomain, makeSelectArticle } from '../selectors';

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

describe('makeSelectArticle', () => {
  const articleSelector = makeSelectArticle();
  it('should select the home page state', () => {
    expect(articleSelector(initialState)).toMatchSnapshot();
  });
});
