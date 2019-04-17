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
import homePageReducer, { initialState } from '../reducer';
import { HomeState } from '../types';

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

describe('homePageReducer', () => {
  let state: HomeState;
  beforeEach(() => {
    state = initialState;
  });

  it('handle the clear state action', () => {
    expect(homePageReducer(state, clearState())).toMatchSnapshot();
  });

  it('handle the refresh action', () => {
    expect(homePageReducer(state, refresh())).toMatchSnapshot();
  });

  it('handle the set search action', () => {
    expect(homePageReducer(state, setSearch(['search']))).toMatchSnapshot();
  });

  it('handle the set sort action', () => {
    expect(homePageReducer(state, setSort('sort'))).toMatchSnapshot();
  });

  it('handle the load articles all action', () => {
    expect(homePageReducer(state, loadArticlesAll())).toMatchSnapshot();
  });

  it('handle the load articles all success action', () => {
    expect(homePageReducer(state, loadArticlesAllSuccess(articles))).toMatchSnapshot();
  });

  it('handle the load articles all error action', () => {
    expect(homePageReducer(state, loadArticlesAllError(error))).toMatchSnapshot();
  });
  it('handle the load next action', () => {
    expect(homePageReducer(state, loadNext())).toMatchSnapshot();
  });

  it('handle the load next success action', () => {
    expect(homePageReducer(state, loadNextSuccess(articles))).toMatchSnapshot();
  });

  it('handle the load articles error action', () => {
    expect(homePageReducer(state, loadNextError(error))).toMatchSnapshot();
  });
});
