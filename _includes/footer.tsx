import Link from 'next/link';
import { customize } from '_api';
import tw from 'twin.macro';
import { useEffect } from 'react';
import { cursor } from 'helper/animations/cursor';
const Footer = () => {
  useEffect(() => {
    cursor();
  });

  const date = new Date();
  const year = date.getFullYear();
  const content = customize.footerText;
  return (
    <footer className="p-4 containers flex flex-wrap items-center justify-center mt-auto">
      <span className="h-[1px] w-full bg-black dark:bg-gray-300 block w-100 mb-2"></span>
      <span className="w-100 text-sm text-gray-500 text-center dark:text-gray-400 mb-2">
        © {year}{' '}
        <Link href="/">
          <a className="hover:underline">{content}</a>
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
