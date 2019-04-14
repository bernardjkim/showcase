import { Article } from 'types';
export interface Comment {}
export interface Like {}
export interface Query {
  id: string;
}
export interface ArticleState {
  loading: boolean;
  error?: Error;
  article?: Article;
  comments: Comment[];
  likes: Like[];
}
// =============================================================================
//  ACTIONS
// =============================================================================

export const CREATE_COMMENT = 'app/ArticlePage/CREATE_COMMENT';
export const CREATE_COMMENT_ERROR = 'app/ArticlePage/CREATE_COMMENT_ERROR';
export const CREATE_COMMENT_SUCCESS = 'app/ArticlePage/CREATE_COMMENT_SUCCESS';

export const LIKE_ARTICLE = 'app/ArticlePage/LIKE_ARTICLE';
export const LIKE_ARTICLE_ERROR = 'app/ArticlePage/LIKE_ARTICLE_ERROR';
export const LIKE_ARTICLE_SUCCESS = 'app/ArticlePage/LIKE_ARTICLE_SUCCESS';

export const LOAD_ARTICLE = 'app/ArticlePage/LOAD_ARTICLE';
export const LOAD_ARTICLE_ERROR = 'app/ArticlePage/LOAD_ARTICLE_ERROR';
export const LOAD_ARTICLE_SUCCESS = 'app/ArticlePage/LOAD_ARTICLE_SUCCESS';

export const LOAD_COMMENTS = 'app/ArticlePage/LOAD_COMMENTS';
export const LOAD_COMMENTS_ERROR = 'app/ArticlePage/LOAD_COMMENTS_ERROR';
export const LOAD_COMMENTS_SUCCESS = 'app/ArticlePage/LOAD_COMMENTS_SUCCESS';

export const LOAD_LIKES = 'app/ArticlePage/LOAD_LIKES';
export const LOAD_LIKES_ERROR = 'app/ArticlePage/LOAD_LIKES_ERROR';
export const LOAD_LIKES_SUCCESS = 'app/ArticlePage/LOAD_LIKES_SUCCESS';

export interface CreateCommentAction {
  type: typeof CREATE_COMMENT;
  comment: Comment;
}

export interface CreateCommentErrorAction {
  type: typeof CREATE_COMMENT_ERROR;
  error: Error;
}

export interface CreateCommentSuccessAction {
  type: typeof CREATE_COMMENT_SUCCESS;
  comment: Comment;
}

export interface LikeArticleAction {
  type: typeof LIKE_ARTICLE;
}

export interface LikeArticleErrorAction {
  type: typeof LIKE_ARTICLE_ERROR;
  error: Error;
}

export interface LikeArticleSuccessAction {
  type: typeof LIKE_ARTICLE_SUCCESS;
  like: Like;
}

export interface LoadArticleAction {
  type: typeof LOAD_ARTICLE;
  query: Query;
}

export interface LoadArticleErrorAction {
  type: typeof LOAD_ARTICLE_ERROR;
  error: Error;
}

export interface LoadArticleSuccessAction {
  type: typeof LOAD_ARTICLE_SUCCESS;
  article: Article;
}

export interface LoadCommentsAction {
  type: typeof LOAD_COMMENTS;
}

export interface LoadCommentsErrorAction {
  type: typeof LOAD_COMMENTS_ERROR;
  error: Error;
}

export interface LoadCommentsSuccessAction {
  type: typeof LOAD_COMMENTS_SUCCESS;
  comments: Comment[];
}

export interface LoadLikesAction {
  type: typeof LOAD_LIKES;
}

export interface LoadLikesErrorAction {
  type: typeof LOAD_LIKES_ERROR;
  error: Error;
}

export interface LoadLikesSuccessAction {
  type: typeof LOAD_LIKES_SUCCESS;
  likes: Like[];
}

export type ArticleActionTypes =
  | CreateCommentAction
  | CreateCommentErrorAction
  | CreateCommentSuccessAction
  | LikeArticleAction
  | LikeArticleErrorAction
  | LikeArticleSuccessAction
  | LoadArticleAction
  | LoadArticleErrorAction
  | LoadArticleSuccessAction
  | LoadCommentsAction
  | LoadCommentsErrorAction
  | LoadCommentsSuccessAction
  | LoadLikesAction
  | LoadLikesErrorAction
  | LoadLikesSuccessAction;
