/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { all, put, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { loadArticlesAllError, loadArticlesAllSuccess, loadNextError, loadNextSuccess } from '../actions';
import homePageSaga, { loadArticlesAll, loadNext } from '../saga';
import { LOAD_ARTICLES_ALL, LOAD_NEXT } from '../types';

// const articles = [
//   {
//     _id: '_id',
//     title: 'title',
//     uri: 'uri',
//     description: 'description',
//     github: 'github',
//     tags: [],
//     image: 'image',
//   },
// ];

const error = new Error('Test Error');

describe('loadArticlesAll Saga', () => {
  const gen = cloneableGenerator(loadArticlesAll)();
  const offset = '0';
  const search = 'search';
  const sort = 'sort';

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  gen.next(search);
  gen.next(offset);
  const callDescriptor = gen.next(sort).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadArticlesAllSuccess action if successful', () => {
    const searchResults = { hits: { hits: [] } };
    const putDescriptor = gen.clone().next(searchResults).value;
    expect(putDescriptor).toEqual(put(loadArticlesAllSuccess([])));
  });

  it('should dispatch the loadArticlesAllError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(loadArticlesAllError(error)));
  });
});

describe('loadNext Saga', () => {
  const gen = cloneableGenerator(loadNext)();
  const offset = 10;
  const search = 'search';
  const sort = 'sort';

  const selectDescriptor = gen.next().value;
  expect(selectDescriptor).toMatchSnapshot();

  gen.next(search);
  gen.next(offset);
  const callDescriptor = gen.next(sort).value;
  expect(callDescriptor).toMatchSnapshot();

  it('should dispatch the loadNextSuccess action if successful', () => {
    const searchResults = { hits: { hits: [] } };

    const putDescriptor = gen.clone().next(searchResults).value;
    expect(putDescriptor).toEqual(put(loadNextSuccess([])));
  });

  it('should dispatch the loadNextError action if error', () => {
    const clone = gen.clone();
    const putDescriptor = clone.throw ? clone.throw(error).value : null;
    expect(putDescriptor).toEqual(put(loadNextError(error)));
  });
});

describe('homePageSaga Saga', () => {
  const saga = homePageSaga();

  it('should start task to watch for api request actions', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(LOAD_ARTICLES_ALL, loadArticlesAll), takeLatest(LOAD_NEXT, loadNext)]),
    );
  });
});
