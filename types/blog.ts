import { Blog, Customize } from 'contentlayer/generated';
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  ReactNode,
  ReactElement,
} from 'react';

export interface IPosts {
  blog: Blog;
  posts: Blog[];
  tags: any;
  settings: Customize;
  totalPages: number;
  currentPage: number;
}

export interface BlogLayoutProps {
  blog: Blog;
  children: ReactElement;
}

export interface IParam {
  params: {
    slug: string;
  };
}
