import {
  clearState,
  loadArticlesAll,
  loadArticlesAllError,
  loadArticlesAllSuccess,
  loadNext,
  loadNextError,
  loadNextSuccess,
  refresh,
  setSearch,
  setSort,
} from '../actions';
import {
  CLEAR_STATE,
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
  LOAD_NEXT,
  LOAD_NEXT_ERROR,
  LOAD_NEXT_SUCCESS,
  REFRESH,
  SET_SEARCH,
  SET_SORT,
} from '../types';

const articles = [
  {
    _id: '_id',
    title: 'title',
    uri: 'uri',
    description: 'description',
    github: 'github',
    tags: [],
    image: 'image',
  },
];
const error = new Error('Test Error');

describe('HomePage actions', () => {
  describe('Clear State Action', () => {
    it('has a type of CLEAR_STATE', () => {
      const expected = {
        type: CLEAR_STATE,
      };
      expect(clearState()).toEqual(expected);
    });
  });

  describe('Refresh Action', () => {
    it('has a type of REFRESH', () => {
      const expected = {
        type: REFRESH,
      };
      expect(refresh()).toEqual(expected);
    });
  });

  describe('SET_SEARCH', () => {
    it('has a type of SET_SEARCH', () => {
      const search = ['search'];
      const expected = {
        type: SET_SEARCH,
        search,
      };
      expect(setSearch(search)).toEqual(expected);
    });
  });

  describe('SET_SORT', () => {
    it('has a type of SET_SORT', () => {
      const sort = 'sort';
      const expected = {
        type: SET_SORT,
        sort,
      };
      expect(setSort(sort)).toEqual(expected);
    });
  });
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
      const expected = {
        type: LOAD_ARTICLES_ALL_SUCCESS,
        articles,
      };
      expect(loadArticlesAllSuccess(articles)).toEqual(expected);
    });
  });

  describe('Load Articles All Error Action', () => {
    it('has a type of LOAD_ARTICLES_ALL_ERROR', () => {
      const expected = {
        type: LOAD_ARTICLES_ALL_ERROR,
        error,
      };
      expect(loadArticlesAllError(error)).toEqual(expected);
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
      const expected = {
        type: LOAD_NEXT_SUCCESS,
        articles,
      };
      expect(loadNextSuccess(articles)).toEqual(expected);
    });
  });

  describe('Load Next Error Action', () => {
    it('has a type of LOAD_NEXT_ERROR', () => {
      const expected = {
        type: LOAD_NEXT_ERROR,
        error,
      };
      expect(loadNextError(error)).toEqual(expected);
    });
  });
});
