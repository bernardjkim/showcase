import {
  clearState,
  setSearch,
  loadArticles,
  loadArticlesError,
  loadArticlesSuccess,
  loadNext,
  loadNextError,
  loadNextSuccess,
} from '../actions';
import {
  CLEAR_STATE,
  SET_SEARCH,
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
  LOAD_NEXT,
  LOAD_NEXT_ERROR,
  LOAD_NEXT_SUCCESS,
} from '../constants';

describe('SearchPage actions', () => {
  describe('Clear State Action', () => {
    it('has a type of CLEAR_STATE', () => {
      const expected = {
        type: CLEAR_STATE,
      };
      expect(clearState()).toEqual(expected);
    });
  });

  describe('Set Search Action', () => {
    it('has a type of SET_SEARCH', () => {
      const search = 'search';
      const expected = {
        type: SET_SEARCH,
        search,
      };
      expect(setSearch(search)).toEqual(expected);
    });
  });

  describe('Load Articles Action', () => {
    it('has a type of LOAD_ARTICLES', () => {
      const expected = {
        type: LOAD_ARTICLES,
      };
      expect(loadArticles()).toEqual(expected);
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

  describe('Load Next Action', () => {
    it('has a type of LOAD_NEXT', () => {
      const expected = {
        type: LOAD_NEXT,
      };
      expect(loadNext()).toEqual(expected);
    });
  });

  describe('Load Next Success Action', () => {
    it('has a type of LOAD_NEXT_SUCCESS', () => {
      const articles = [];
      const expected = {
        type: LOAD_NEXT_SUCCESS,
        articles,
      };
      expect(loadNextSuccess(articles)).toEqual(expected);
    });
  });

  describe('Load Next Error Action', () => {
    it('has a type of LOAD_NEXT_ERROR', () => {
      const error = new Error('Test Error');
      const expected = {
        type: LOAD_NEXT_ERROR,
        error,
      };
      expect(loadNextError(error)).toEqual(expected);
    });
  });
});
