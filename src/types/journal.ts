export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface Post extends PostMetadata {
  slug: string;
  readingTime: string;
}
