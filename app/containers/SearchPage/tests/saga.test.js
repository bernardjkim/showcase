/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, all, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import searchPageSaga, { loadArticles, loadNext } from '../saga';
import { LOAD_ARTICLES, LOAD_NEXT } from '../constants';
import {
  loadArticlesSuccess,
  loadArticlesError,
  loadNextError,
  loadNextSuccess,
} from '../actions';

describe('loadArticles Saga', () => {
  const gen = cloneableGenerator(loadArticles)();
  const search = 'search';
  const offset = '0';

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  gen.next(search);
  gen.next(offset);
  const callDescriptor = gen.value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadArticlesSuccess action if successful', () => {
    const searchResults = { hits: { hits: [] } };
    const articles = [];

    const putDescriptor = gen.clone().next(searchResults).value;
    expect(putDescriptor).toEqual(put(loadArticlesSuccess(articles)));
  });

  it('should dispatch the loadArticlesError action if error', () => {
    const error = new Error('Test Error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(loadArticlesError(error)));
  });
});

describe('loadNext Saga', () => {
  const gen = cloneableGenerator(loadNext)();
  const search = 'search';
  const offset = '0';

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  gen.next(search);
  gen.next(offset);
  const callDescriptor = gen.value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadNextSuccess action if successful', () => {
    const searchResults = { hits: { hits: [] } };
    const articles = [];

    const putDescriptor = gen.clone().next(searchResults).value;
    expect(putDescriptor).toEqual(put(loadNextSuccess(articles)));
  });

  it('should dispatch the loadNextError action if error', () => {
    const error = new Error('Test Error');
    const putDescriptor = gen.clone().throw(error).value;
    expect(putDescriptor).toEqual(put(loadNextError(error)));
  });
});

describe('searchPageSaga Saga', () => {
  const saga = searchPageSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([
        takeLatest(LOAD_ARTICLES, loadArticles),
        takeLatest(LOAD_NEXT, loadNext),
      ]),
    );
  });
});
