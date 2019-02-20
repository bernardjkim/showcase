import homePageReducer, { initialState } from '../reducer';
import {
  clearState,
  loadArticlesAll,
  loadArticlesAllError,
  loadArticlesAllSuccess,
  loadNext,
  loadNextError,
  loadNextSuccess,
} from '../actions';

describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    expect(homePageReducer(state, {})).toMatchSnapshot();
  });
  it('handle the clear state action', () => {
    expect(homePageReducer(state, clearState())).toMatchSnapshot();
  });

  it('handle the load articles all action', () => {
    expect(homePageReducer(state, loadArticlesAll())).toMatchSnapshot();
  });

  it('handle the load articles all success action', () => {
    const articles = [];
    expect(
      homePageReducer(state, loadArticlesAllSuccess(articles)),
    ).toMatchSnapshot();
  });

  it('handle the load articles all error action', () => {
    const error = new Error('Test Error');
    expect(
      homePageReducer(state, loadArticlesAllError(error)),
    ).toMatchSnapshot();
  });
  it('handle the load next action', () => {
    expect(homePageReducer(state, loadNext())).toMatchSnapshot();
  });

  it('handle the load next success action', () => {
    const articles = [];
    expect(homePageReducer(state, loadNextSuccess(articles))).toMatchSnapshot();
  });

  it('handle the load articles error action', () => {
    const error = new Error('Test Error');
    expect(homePageReducer(state, loadNextError(error))).toMatchSnapshot();
  });
});
