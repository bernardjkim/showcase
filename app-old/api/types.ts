export interface API_ARTICLE {
  create: string;
  getAll: (offset: number) => string;
  getOne: (id: string) => string;
  search: (term: string, offset: number) => string;
}

export interface API_AUTH {
  login: string;
  logout: string;
}

export interface API_COMMENT {
  create: string;
  get: (id: string) => string;
}

export interface API_LIKE {
  getAll: string;
  create: string;
  getByArticle: (id: string) => string;
}

export interface API_USER {
  create: string;
  getCurrent: string;
  getOne: (id: string) => string;
}

export interface API {
  article: API_ARTICLE;
  auth: API_AUTH;
  comment: API_COMMENT;
  like: API_LIKE;
  user: API_USER;
}
