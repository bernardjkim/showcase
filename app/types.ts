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
}

export type Sort = 'new' | 'top';
