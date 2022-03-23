import React from 'react';

const headingMaker = () => {
  const tags: any = {};

  for (let i = 1; i <= 6; i++) {
    const H = `h${i}`;
    tags[H] = ({ children }: any) => {
      const idText = children.replace(/\s/g, '_').toLowerCase();
      const tag = React.createElement(H, { id: idText }, children);
      return tag;
    };
  }
  return tags;
};

export const MDXCompoenet = headingMaker();
