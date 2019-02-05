/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
} from './constants';

/**
 * Load articles all, this action starts the request saga
 *
 * @return {object} - An action object with a type of LOAD_ARTICLES_ALL
 */
export function loadArticlesAll() {
  return {
    type: LOAD_ARTICLES_ALL,
  };
}

/**
 * Dispatched when loading articles all is successful
 *
 * @param   {Articles[]}  articles  - Array of articles
 *
 * @returns {object}                - An action object with a type of LOAD_ARTICLES_ALL_SUCCESS
 */
export function loadArticlesAllSuccess(articles) {
  return {
    type: LOAD_ARTICLES_ALL_SUCCESS,
    articles,
  };
}

/**
 * Dispatched when loading articles fails
 *
 * @param   {Error}   error - Received error
 *
 * @returns {object}        - An action object with a type of LOAD_ARTICLES_ALL_ERROR
 */
export function loadArticlesAllError(error) {
  return {
    type: LOAD_ARTICLES_ALL_ERROR,
    error,
  };
}
