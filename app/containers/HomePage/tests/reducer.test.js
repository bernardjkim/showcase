// import { fromJS } from 'immutable';
import homePageReducer, { initialState } from '../reducer';
import {
  loadArticlesAll,
  loadArticlesAllError,
  loadArticlesAllSuccess,
} from '../actions';

describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    expect(homePageReducer(state, {})).toMatchSnapshot();
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
});
