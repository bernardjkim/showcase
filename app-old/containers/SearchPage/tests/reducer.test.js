import searchPageReducer, { initialState } from '../reducer';

import {
  clearState,
  setSearch,
  loadArticles,
  loadArticlesSuccess,
  loadArticlesError,
  loadNext,
  loadNextError,
  loadNextSuccess,
} from '../actions';

describe('searchPageReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    expect(searchPageReducer(state, {})).toMatchSnapshot();
  });

  it('handle the clear state action', () => {
    expect(searchPageReducer(state, clearState())).toMatchSnapshot();
  });

  it('handle the set search action', () => {
    const search = 'search';
    expect(searchPageReducer(state, setSearch(search))).toMatchSnapshot();
  });

  it('handle the load articles action', () => {
    expect(searchPageReducer(state, loadArticles())).toMatchSnapshot();
  });

  it('handle the load articles success action', () => {
    const articles = [];
    expect(
      searchPageReducer(state, loadArticlesSuccess(articles)),
    ).toMatchSnapshot();
  });

  it('handle the load articles error action', () => {
    const error = new Error('Test Error');
    expect(
      searchPageReducer(state, loadArticlesError(error)),
    ).toMatchSnapshot();
  });

  it('handle the load next action', () => {
    expect(searchPageReducer(state, loadNext())).toMatchSnapshot();
  });

  it('handle the load next success action', () => {
    const articles = [];
    expect(
      searchPageReducer(state, loadNextSuccess(articles)),
    ).toMatchSnapshot();
  });

  it('handle the load articles error action', () => {
    const error = new Error('Test Error');
    expect(searchPageReducer(state, loadNextError(error))).toMatchSnapshot();
  });
});
