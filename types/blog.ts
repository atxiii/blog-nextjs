import { Blog, Customize } from 'contentlayer/generated';
import { ReactChild, ReactFragment, ReactPortal, ReactNode } from 'react';

export interface IPosts {
  posts: Blog[];
  tags: any;
  settings: Customize;
  totalPages: number;
  currentPage: number;
}

export interface BlogLayoutProps {
  blog: Blog;
  children:
    | ReactNode
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

export interface IParam {
  params: {
    slug: string;
  };
}
