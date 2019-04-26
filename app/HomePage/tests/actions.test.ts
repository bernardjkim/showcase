import { clearState, setSearch, setSort } from '../actions';
import { CLEAR_STATE, SET_SEARCH, SET_SORT } from '../types';

describe('HomePage actions', () => {
  describe('Clear State Action', () => {
    it('has a type of CLEAR_STATE', () => {
      const expected = {
        type: CLEAR_STATE,
      };
      expect(clearState()).toEqual(expected);
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
});
