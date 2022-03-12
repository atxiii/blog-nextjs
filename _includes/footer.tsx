import Link from 'next/link';
import { customize } from '_api';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const content = customize.footerText;
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-auto">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400  containers">
        © {year}{' '}
        <Link href="/">
          <a className="hover:underline">{content}</a>
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
