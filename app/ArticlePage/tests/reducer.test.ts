// import {
//   createComment,
//   createCommentError,
//   createCommentSuccess,
//   likeArticle,
//   likeArticleError,
//   likeArticleSuccess,
//   loadArticle,
//   loadArticleError,
//   loadArticleSuccess,
//   loadComments,
//   loadCommentsError,
//   loadCommentsSuccess,
//   loadLikes,
//   loadLikesError,
//   loadLikesSuccess,
// } from '../actions';
// import articlePageReducer, { initialState } from '../reducer';
// import { ArticleState } from '../types';

// describe('articlePageReducer', () => {
//   let state: ArticleState;
//   beforeEach(() => {
//     state = initialState;
//   });

//   const error = new Error('Test Error');
//   const article = {
//     _id: '_id',
//     title: 'title',
//     uri: 'uri',
//     github: 'github',
//     description: 'description',
//     tags: [],
//     image: 'image',
//   };

//   it('handles the createComment action', () => {
//     expect(articlePageReducer(state, createComment({}))).toMatchSnapshot();
//   });

//   it('handles the createCommentSuccess action', () => {
//     expect(articlePageReducer(state, createCommentSuccess({}))).toMatchSnapshot();
//   });

//   it('handles the createCommentError action', () => {
//     expect(articlePageReducer(state, createCommentError(error))).toMatchSnapshot();
//   });

//   it('handles the likeArticle action', () => {
//     expect(articlePageReducer(state, likeArticle())).toMatchSnapshot();
//   });

//   it('handles the likeArticleSuccess action', () => {
//     expect(articlePageReducer(state, likeArticleSuccess({}))).toMatchSnapshot();
//   });

//   it('handles the likeArticleError action', () => {
//     expect(articlePageReducer(state, likeArticleError(error))).toMatchSnapshot();
//   });

//   it('handles the loadArticle action', () => {
//     const query = { id: 'id' };
//     expect(articlePageReducer(state, loadArticle(query))).toMatchSnapshot();
//   });

//   it('handles the loadArticleSuccess action', () => {
//     expect(articlePageReducer(state, loadArticleSuccess(article))).toMatchSnapshot();
//   });

//   it('handles the loadArticleError action', () => {
//     expect(articlePageReducer(state, loadArticleError(error))).toMatchSnapshot();
//   });

//   it('handles the loadComments action', () => {
//     expect(articlePageReducer(state, loadComments())).toMatchSnapshot();
//   });

//   it('handles the loadCommentsSuccess action', () => {
//     expect(articlePageReducer(state, loadCommentsSuccess([]))).toMatchSnapshot();
//   });

//   it('handles the loadCommentsError action', () => {
//     expect(articlePageReducer(state, loadCommentsError(error))).toMatchSnapshot();
//   });

//   it('handles the loadLikes action', () => {
//     expect(articlePageReducer(state, loadLikes())).toMatchSnapshot();
//   });

//   it('handles the loadLikesSuccess action', () => {
//     expect(articlePageReducer(state, loadLikesSuccess([]))).toMatchSnapshot();
//   });

//   it('handles the loadLikesError action', () => {
//     expect(articlePageReducer(state, loadLikesError(error))).toMatchSnapshot();
//   });
// });
