import { initialState } from '../reducer';
import {
  makeSelectArticle,
  makeSelectComments,
  makeSelectError,
  makeSelectLikes,
  makeSelectLoading,
  selectArticlePageDomain,
} from '../selectors';

describe('selectArticlePageDomain', () => {
  it('should select the article page state', () => {
    expect(selectArticlePageDomain(initialState)).toMatchSnapshot();
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

describe('makeSelectComments', () => {
  const commentsSelector = makeSelectComments();
  it('should select the comments state', () => {
    expect(commentsSelector(initialState)).toMatchSnapshot();
  });
});

describe('makeSelectLikes', () => {
  const likesSelector = makeSelectLikes();
  it('should select the likes state', () => {
    expect(likesSelector(initialState)).toMatchSnapshot();
  });
});
