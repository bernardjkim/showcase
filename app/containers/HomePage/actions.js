/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_ARTICLE,
  LOAD_ARTICLE_ERROR,
  LOAD_ARTICLE_SUCCESS,
} from './constants';

/**
 * Load article, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ARTICLE
 */
export function loadArticle() {
  return {
    type: LOAD_ARTICLE,
  };
}

/**
 * Dispatched when the article is loaded by the request saga
 *
 * @param  {array}  article The article data
 *
 * @return {object}         An action object with a type of LOAD_ARTICLE_SUCCESS
 */
export function loadArticleSuccess(article) {
  return {
    type: LOAD_ARTICLE_SUCCESS,
    article,
  };
}

/**
 * Dispatched when loading the article fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ARTICLE_ERROR
 */
export function loadArticleError(error) {
  return {
    type: LOAD_ARTICLE_ERROR,
    error,
  };
}
