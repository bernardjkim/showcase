/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, all, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import searchPageSaga, { loadArticles } from '../saga';
import { LOAD_ARTICLES } from '../constants';
import { loadArticlesSuccess, loadArticlesError } from '../actions';

describe('loadArticles Saga', () => {
  const query = { q: 'q' };
  const gen = cloneableGenerator(loadArticles)({ query });

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadArticlesSuccess action if successful', () => {
    const articles = [];
    const putDescriptor = gen.clone().next({ articles }).value;
    expect(putDescriptor).toEqual(put(loadArticlesSuccess(articles)));
  });

  it('should dispatch the loadArticlesError action if error', () => {
    const error = new Error('Test Error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(loadArticlesError(error)));
  });
});

describe('searchPageSaga Saga', () => {
  const saga = searchPageSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(LOAD_ARTICLES, loadArticles)]),
    );
  });
});
