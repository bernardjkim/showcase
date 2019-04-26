import { clearState, setSearch, setSort } from '../actions';
import homePageReducer, { initialState } from '../reducer';
import { HomeState } from '../types';

describe('homePageReducer', () => {
  let state: HomeState;
  beforeEach(() => {
    state = initialState;
  });

  it('handle the clear state action', () => {
    expect(homePageReducer(state, clearState())).toMatchSnapshot();
  });

  it('handle the set search action', () => {
    expect(homePageReducer(state, setSearch(['search']))).toMatchSnapshot();
  });

  it('handle the set sort action', () => {
    expect(homePageReducer(state, setSort('sort'))).toMatchSnapshot();
  });
});
