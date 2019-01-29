import {
  createComment,
  createCommentError,
  createCommentSuccess,
  likeArticle,
  likeArticleError,
  likeArticleSuccess,
  loadArticle,
  loadArticleError,
  loadArticleSuccess,
  loadComments,
  loadCommentsError,
  loadCommentsSuccess,
} from '../actions';

import {
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  LIKE_ARTICLE,
  LIKE_ARTICLE_ERROR,
  LIKE_ARTICLE_SUCCESS,
  LOAD_ARTICLE,
  LOAD_ARTICLE_ERROR,
  LOAD_ARTICLE_SUCCESS,
  LOAD_COMMENTS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_SUCCESS,
} from '../constants';

describe('HomePage actions', () => {
  describe('Create Comment Action', () => {
    it('has a type of CREATE_COMMENT', () => {
      const comment = {};
      const expected = {
        type: CREATE_COMMENT,
        comment,
      };
      expect(createComment(comment)).toEqual(expected);
    });
  });

  describe('Create Comment Success Action', () => {
    it('has a type of CREATE_COMMENT_SUCCESS', () => {
      const comment = {};
      const expected = {
        type: CREATE_COMMENT_SUCCESS,
        comment,
      };
      expect(createCommentSuccess(comment)).toEqual(expected);
    });
  });

  describe('Create Comment Error Action', () => {
    it('has a type of CREATE_COMMENT_ERROR', () => {
      const error = {};
      const expected = {
        type: CREATE_COMMENT_ERROR,
        error,
      };
      expect(createCommentError(error)).toEqual(expected);
    });
  });

  describe('Like Article Action', () => {
    it('has a type of LIKE_ARTICLE', () => {
      const expected = {
        type: LIKE_ARTICLE,
      };
      expect(likeArticle()).toEqual(expected);
    });
  });

  describe('Like Article Success Action', () => {
    it('has a type of LIKE_ARTICLE_SUCCESS', () => {
      const expected = {
        type: LIKE_ARTICLE_SUCCESS,
      };
      expect(likeArticleSuccess()).toEqual(expected);
    });
  });

  describe('Like Article Error Action', () => {
    it('has a type of LIKE_ARTICLE_ERROR', () => {
      const error = {};
      const expected = {
        type: LIKE_ARTICLE_ERROR,
        error,
      };
      expect(likeArticleError(error)).toEqual(expected);
    });
  });

  describe('Load Article Action', () => {
    it('has a type of LOAD_ARTICLE', () => {
      const expected = {
        type: LOAD_ARTICLE,
      };
      expect(loadArticle()).toEqual(expected);
    });
  });

  describe('Load Article Success Action', () => {
    it('has a type of LOAD_ARTICLE_SUCCESS', () => {
      const article = {};
      const expected = {
        type: LOAD_ARTICLE_SUCCESS,
        article,
      };
      expect(loadArticleSuccess(article)).toEqual(expected);
    });
  });

  describe('Load Article Error Action', () => {
    it('has a type of LOAD_ARTICLE_ERROR', () => {
      const error = {};
      const expected = {
        type: LOAD_ARTICLE_ERROR,
        error,
      };
      expect(loadArticleError(error)).toEqual(expected);
    });
  });

  describe('Load Comments Action', () => {
    it('has a type of LOAD_COMMENTS', () => {
      const expected = {
        type: LOAD_COMMENTS,
      };
      expect(loadComments()).toEqual(expected);
    });
  });

  describe('Load Comments Success Action', () => {
    it('has a type of LOAD_COMMENTS_SUCCESS', () => {
      const comments = [];
      const expected = {
        type: LOAD_COMMENTS_SUCCESS,
        comments,
      };
      expect(loadCommentsSuccess(comments)).toEqual(expected);
    });
  });

  describe('Load Comments Error Action', () => {
    it('has a type of LOAD_COMMENTS_ERROR', () => {
      const error = {};
      const expected = {
        type: LOAD_COMMENTS_ERROR,
        error,
      };
      expect(loadCommentsError(error)).toEqual(expected);
    });
  });
});
