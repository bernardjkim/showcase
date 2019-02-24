/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, all, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import homePageSaga, { loadArticlesAll, loadNext } from '../saga';
import { LOAD_ARTICLES_ALL, LOAD_NEXT } from '../constants';
import {
  loadArticlesAllSuccess,
  loadArticlesAllError,
  loadNextError,
  loadNextSuccess,
} from '../actions';

describe('loadArticlesAll Saga', () => {
  const gen = cloneableGenerator(loadArticlesAll)();
  const offset = '0';

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  gen.next(offset);
  const callDescriptor = gen;
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

describe('loadNext Saga', () => {
  const gen = cloneableGenerator(loadNext)();
  const offset = '0';

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  gen.next(offset);
  const callDescriptor = gen;
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

describe('homePageSaga Saga', () => {
  const saga = homePageSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([
        takeLatest(LOAD_ARTICLES_ALL, loadArticlesAll),
        takeLatest(LOAD_NEXT, loadNext),
      ]),
    );
  });
});
