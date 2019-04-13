export interface Query {
  id: string;
}
// =============================================================================
//  ACTIONS
// =============================================================================

export const CREATE_COMMENT = 'app/ArticlePage/CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'app/ArticlePage/CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'app/ArticlePage/CREATE_COMMENT_ERROR';

export const LIKE_ARTICLE = 'app/ArticlePage/LIKE_ARTICLE';
export const LIKE_ARTICLE_SUCCESS = 'app/ArticlePage/LIKE_ARTICLE_SUCCESS';
export const LIKE_ARTICLE_ERROR = 'app/ArticlePage/LIKE_ARTICLE_ERROR';

export const LOAD_ARTICLE = 'app/ArticlePage/LOAD_ARTICLE';
export const LOAD_ARTICLE_SUCCESS = 'app/ArticlePage/LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_ERROR = 'app/ArticlePage/LOAD_ARTICLE_ERROR';

export const LOAD_COMMENTS = 'app/ArticlePage/LOAD_COMMENTS';
export const LOAD_COMMENTS_SUCCESS = 'app/ArticlePage/LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_ERROR = 'app/ArticlePage/LOAD_COMMENTS_ERROR';

export const LOAD_LIKES = 'app/ArticlePage/LOAD_LIKES';
export const LOAD_LIKES_SUCCESS = 'app/ArticlePage/LOAD_LIKES_SUCCESS';
export const LOAD_LIKES_ERROR = 'app/ArticlePage/LOAD_LIKES_ERROR';
