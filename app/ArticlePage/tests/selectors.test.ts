import { initialState } from '../reducer';
import { makeSelectArticleId, selectArticlePageDomain } from '../selectors';

describe('selectArticlePageDomain', () => {
  it('should select the article page state', () => {
    expect(selectArticlePageDomain(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectArticleId', () => {
  const articleIdSelector = makeSelectArticleId();
  it('should select the likes state', () => {
    expect(articleIdSelector(initialState)).toMatchSnapshot();
  });
});
