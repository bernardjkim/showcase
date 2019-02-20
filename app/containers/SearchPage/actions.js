/*
 *
 * SearchPage actions
 *
 */

import {
  CLEAR_STATE,
  SET_SEARCH,
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
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
 * Set the current search term
 * @param   {string} search - The search term
 * @returns {object}        - An action object with a type of SET_SEARCH
 */
export function setSearch(search) {
  return {
    type: SET_SEARCH,
    search,
  };
}

/**
 * Load articles, this action starts the request saga
 *
 * @return {object} - An action object with a type of LOAD_ARTICLES
 */
export function loadArticles() {
  return {
    type: LOAD_ARTICLES,
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
