import {
  loadArticlesAll,
  loadArticlesAllError,
  loadArticlesAllSuccess,
} from '../actions';
import {
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
} from '../constants';

describe('HomePage actions', () => {
  describe('Load Articles All Action', () => {
    it('has a type of LOAD_ARTICLES_ALL', () => {
      const expected = {
        type: LOAD_ARTICLES_ALL,
      };
      expect(loadArticlesAll()).toEqual(expected);
    });
  });

  describe('Load Articles All Success Action', () => {
    it('has a type of LOAD_ARTICLES_ALL_SUCCESS', () => {
      const articles = [];
      const expected = {
        type: LOAD_ARTICLES_ALL_SUCCESS,
        articles,
      };
      expect(loadArticlesAllSuccess(articles)).toEqual(expected);
    });
  });

  describe('Load Articles All Error Action', () => {
    it('has a type of LOAD_ARTICLES_ALL_ERROR', () => {
      const error = new Error('Test Error');
      const expected = {
        type: LOAD_ARTICLES_ALL_ERROR,
        error,
      };
      expect(loadArticlesAllError(error)).toEqual(expected);
    });
  });
});
