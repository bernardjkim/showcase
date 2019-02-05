import {
  loadArticles,
  loadArticlesError,
  loadArticlesSuccess,
} from '../actions';
import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
} from '../constants';

describe('SearchPage actions', () => {
  describe('Load Articles Action', () => {
    it('has a type of LOAD_ARTICLES', () => {
      const query = { q: 'q' };
      const expected = {
        type: LOAD_ARTICLES,
        query,
      };
      expect(loadArticles(query)).toEqual(expected);
    });
  });

  describe('Load Articles Success Action', () => {
    it('has a type of LOAD_ARTICLES_SUCCESS', () => {
      const articles = [];
      const expected = {
        type: LOAD_ARTICLES_SUCCESS,
        articles,
      };
      expect(loadArticlesSuccess(articles)).toEqual(expected);
    });
  });

  describe('Load Article Error Action', () => {
    it('has a type of LOAD_ARTICLES_ERROR', () => {
      const error = new Error('Test Error');
      const expected = {
        type: LOAD_ARTICLES_ERROR,
        error,
      };
      expect(loadArticlesError(error)).toEqual(expected);
    });
  });
});
