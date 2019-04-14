/*
 *
 * ArticlePage actions
 *
 */

import { Article } from 'types';
import {
  ArticleActionTypes,
  Comment,
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  Like,
  LIKE_ARTICLE,
  LIKE_ARTICLE_ERROR,
  LIKE_ARTICLE_SUCCESS,
  LOAD_ARTICLE,
  LOAD_ARTICLE_ERROR,
  LOAD_ARTICLE_SUCCESS,
  LOAD_COMMENTS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_SUCCESS,
  LOAD_LIKES,
  LOAD_LIKES_ERROR,
  LOAD_LIKES_SUCCESS,
  Query,
} from './types';

/**
 * Create comment, this action starts the request saga
 *
 * @param  {object}  comment  - The comment value
 *
 * @return {object}           - An action object with a type of CREATE_COMMENT
 */
export function createComment(comment: Comment): ArticleActionTypes {
  return {
    type: CREATE_COMMENT,
    comment,
  };
}

/**
 * Dispatched when posting the comment is acknowledged by the request saga
 *
 * @param  {object}  comment  - The comment data
 *
 * @return {object}           - An action object with a type of CREATE_COMMENT_SUCCESS
 */
export function createCommentSuccess(comment: Comment): ArticleActionTypes {
  return {
    type: CREATE_COMMENT_SUCCESS,
    comment,
  };
}

/**
 * Dispatched when posting the comment fails
 *
 * @return {object} - An action object with a type of CREATE_COMMENT_SUCCESS
 */
export function createCommentError(error: Error): ArticleActionTypes {
  return {
    type: CREATE_COMMENT_ERROR,
    error,
  };
}

/**
 * Like article, this action starts the request saga
 *
 * @return {object} - An action object with a type of LIKE_ARTICLE
 */
export function likeArticle(): ArticleActionTypes {
  return {
    type: LIKE_ARTICLE,
  };
}

/**
 * Dispatched when posting the like is acknowledged by the request saga
 * @param   {Like}    like  - Like object
 *
 * @returns {object}        - An action object with a type of LIKE_ARTICLE_SUCCESS
 */
export function likeArticleSuccess(like: Like): ArticleActionTypes {
  return {
    type: LIKE_ARTICLE_SUCCESS,
    like,
  };
}

/**
 * Dispatched when posting the like fails
 *
 * @return {object} - An action object with a type of LIKE_ARTICLE_ERROR
 */
export function likeArticleError(error: Error): ArticleActionTypes {
  return {
    type: LIKE_ARTICLE_ERROR,
    error,
  };
}

/**
 * Load article, this action starts the request saga
 *
 * @param  {object}  query  - The comment data
 *
 * @return {object}         - An action object with a type of LOAD_ARTICLE
 */
export function loadArticle(query: Query): ArticleActionTypes {
  return {
    type: LOAD_ARTICLE,
    query,
  };
}

/**
 * Dispatched when the article is loaded by the request saga
 *
 * @param  {object}  article  - The article data
 *
 * @return {object}           - An action object with a type of LOAD_ARTICLE_SUCCESS
 */
export function loadArticleSuccess(article: Article): ArticleActionTypes {
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
export function loadArticleError(error: Error): ArticleActionTypes {
  return {
    type: LOAD_ARTICLE_ERROR,
    error,
  };
}

/**
 * Load comments, this action starts the request saga
 *
 * @return {object} - An action object with a type of LOAD_COMMENTS
 */
export function loadComments(): ArticleActionTypes {
  return {
    type: LOAD_COMMENTS,
  };
}

/**
 * Dispatched when the comments are loaded by the request saga
 *
 * @param  {array}  comments  - The comments data
 *
 * @return {object}           - An action object with a type of LOAD_COMMENT_SUCCESS
 */
export function loadCommentsSuccess(comments: Comment[]): ArticleActionTypes {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    comments,
  };
}

/**
 * Dispatched when loading the comments fails
 *
 * @param  {object} error - The error
 *
 * @return {object}       - An action object with a type of LOAD_COMMENTS_ERROR
 */
export function loadCommentsError(error: Error): ArticleActionTypes {
  return {
    type: LOAD_COMMENTS_ERROR,
    error,
  };
}

/**
 * Load likes, this action starts the request saga
 *
 * @return {object} - An action object with a type of LOAD_LIKES
 */
export function loadLikes(): ArticleActionTypes {
  return {
    type: LOAD_LIKES,
  };
}

/**
 * Dispatched when the likes are loaded by the request saga
 *
 * @param  {Like[]}  likes  - The array of likes for this article
 *
 * @return {object}         - An action object with a type of LOAD_LIKES_SUCCESS
 */
export function loadLikesSuccess(likes: Like[]): ArticleActionTypes {
  return {
    type: LOAD_LIKES_SUCCESS,
    likes,
  };
}

/**
 * Dispatched when loading the likes fails
 *
 * @param  {object} error - The error
 *
 * @return {object}       - An action object with a type of LOAD_LIKES_ERROR
 */
export function loadLikesError(error: Error): ArticleActionTypes {
  return {
    type: LOAD_LIKES_ERROR,
    error,
  };
}
