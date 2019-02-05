/*
 *
 * SearchPage actions
 *
 */

import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
} from './constants';

/**
 * Load articles, this action starts the request saga
 *
 * @param  {object}  query  - The query object
 *
 * @return {object}         - An action object with a type of LOAD_ARTICLES
 */
export function loadArticles(query) {
  return {
    type: LOAD_ARTICLES,
    query,
  };
}

/**
 * Dispatched when loading articles is successful
 *
 * @param   {Articles[]}  articles  - Array of articles
 *
 * @returns {object}                - An action object with a type of LOAD_ARTICLES_SUCCESS
 */
export function loadArticlesSuccess(articles) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    articles,
  };
}

/**
 * Dispatched when loading articles fails
 *
 * @param   {Error}   error - Received error
 *
 * @returns {object}        - An action object with a type of LOAD_ARTICLES_ERROR
 */
export function loadArticlesError(error) {
  return {
    type: LOAD_ARTICLES_ERROR,
    error,
  };
}
