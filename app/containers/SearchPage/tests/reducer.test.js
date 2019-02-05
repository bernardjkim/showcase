import { fromJS } from 'immutable';
import searchPageReducer from '../reducer';

import {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesError,
} from '../actions';

describe('searchPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      articles: false,
    });
  });

  it('returns the initial state', () => {
    expect(searchPageReducer(state, {})).toMatchSnapshot();
  });

  it('handle the load articles action', () => {
    const query = { q: 'q' };
    expect(searchPageReducer(state, loadArticles(query))).toMatchSnapshot();
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
});
