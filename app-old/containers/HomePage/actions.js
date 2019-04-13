/*
 *
 * HomePage actions
 *
 */

import {
  CLEAR_STATE,
  LOAD_ARTICLES_ALL,
  LOAD_ARTICLES_ALL_ERROR,
  LOAD_ARTICLES_ALL_SUCCESS,
  LOAD_NEXT,
  LOAD_NEXT_ERROR,
  LOAD_NEXT_SUCCESS,
} from './constants';

/**
 * Clears the homepage state
 *
 * @returns {object}  - An action object with a type of CLEAR_STATE
 */
export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}

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
/**
 * Load next page of articles, this action start the request saga
 * @returns {object}  - An action object with a type of LOAD_NEXT
 */
export function loadNext() {
  return {
    type: LOAD_NEXT,
  };
}

/**
 * Dispatched when loading next page is successful
 * @param   {Articles[]}  articles  - Array of articles
 * @returns {object}                - An action object with a type of LOAD_NEXT_SUCCESS
 */
export function loadNextSuccess(articles) {
  return {
    type: LOAD_NEXT_SUCCESS,
    articles,
  };
}

/**
 * Dispatched when loading next page fails
 * @param   {Error}   error - Received error
 * @returns {object}        - An action object with a type of LOAD_NEXT_ERROR
 */
export function loadNextError(error) {
  return {
    type: LOAD_NEXT_ERROR,
    error,
  };
}