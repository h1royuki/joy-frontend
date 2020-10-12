declare namespace res {
  let data: Page[];
}

declare class Page {
  public _nextPage: Number | null;
  public _prevPage: Number | null;
  public _posts: Post[];
}

declare class Post {
  public _content: Content[];
  public _rating: Number;
  public _commentsCount: Number;
  public _author: User;
}

declare class User {
  public _nickname: string;
  public _id: Number;
}

declare class Content {
  public _elements: ContentElement[];
}

declare class ContentElement {
  public _type: string;
  public _data: string | null;
  public _tag: string | null;
  public _link: string | null;
  public _childrens: ContentElement[] | null;
}
