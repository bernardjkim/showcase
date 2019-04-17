import { Sort } from 'types';

export interface ArticleApi {
  create: string;
  getAll: (offset: number) => string;
  getOne: (id: string) => string;
  search: (term: string, offset: number, sort: Sort) => string;
}

export interface AuthApi {
  login: string;
  logout: string;
}

export interface CommentApi {
  create: string;
  get: (id: string) => string;
}

export interface LikeApi {
  getAll: string;
  create: string;
  getByArticle: (id: string) => string;
}

export interface UserApi {
  create: string;
  getCurrent: string;
  getOne: (id: string) => string;
}

export interface API {
  article: ArticleApi;
  auth: AuthApi;
  comment: CommentApi;
  like: LikeApi;
  user: UserApi;
}
