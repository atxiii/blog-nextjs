import Link from 'next/link';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-auto">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400  containers">
        © {year}{' '}
        <Link href="/">
          <a className="hover:underline">Rick™</a>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
