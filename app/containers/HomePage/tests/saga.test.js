/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, all, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import homePageSaga, { loadArticlesAll } from '../saga';
import { LOAD_ARTICLES_ALL } from '../constants';
import { loadArticlesAllSuccess, loadArticlesAllError } from '../actions';

describe('loadArticlesAll Saga', () => {
  const gen = cloneableGenerator(loadArticlesAll)();

  const callDescriptor = gen.next().value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadArticlesAllSuccess action if successful', () => {
    const searchResults = { hits: { hits: [] } };
    const articles = [];
    const putDescriptor = gen.clone().next(searchResults).value;
    expect(putDescriptor).toEqual(put(loadArticlesAllSuccess(articles)));
  });

  it('should dispatch the loadArticlesAllError action if error', () => {
    const error = new Error('Test Error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(loadArticlesAllError(error)));
  });
});

describe('homePageSaga Saga', () => {
  const saga = homePageSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(LOAD_ARTICLES_ALL, loadArticlesAll)]),
    );
  });
});
