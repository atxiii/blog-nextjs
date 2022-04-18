import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';

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
interface Idata {
  fit: 'cover' | 'contain';
  imageAlt: string;
}

const imageMaker = ({ src, alt }: ImageProps) => {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    setEnable(true);
  });

  const details = alt?.split('|');

  const data: Idata = {
    fit: 'cover',
    imageAlt: 'alt',
  };

  if (details) {
    data.fit = details[1] === 'contain' ? 'contain' : 'cover';
    data.imageAlt = details[0];
  }

  const imageProps = {
    src,
    alt: data.imageAlt,
  };

  return (
    <>
      {enable && (
        <figure className="w-full md:min-h-[400px] min-h-[200px] relative">
          <Image objectFit={data.fit} layout="fill" {...imageProps} />
        </figure>
      )}
    </>
  );
};

export const MDXCompoenet = {
  ...headingMaker(),
  img: imageMaker,
};
