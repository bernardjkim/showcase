export interface User {
  _id: string;
  username: string;
  email: string;
  updated: Date;
}
export interface Article {
  _id: string;
  title: string;
  uri: string;
  github: string;
  description: string;
  tags: string[];
  image: string;
  likes: LikeList;
}

export interface ArticleList {
  totalCount: number;
  edges: Article[];
}

export interface Like {
  _id: string;
  user: User;
  article: Article;
  value: boolean;
  updated: Date;
}

export interface LikeList {
  totalCount: number;
  edges: Like[];
}

export type Sort = 'new' | 'top';
