import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Light from './Icons/light';

interface Links {
  name: string;
  link: string;
}

const Navbar = (props: { links: Array<Links> }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  let [nav, setNav] = useState(false);

  const handleMenu = () => setNav(!nav);

  const handleDarkMode = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  // when user Mounted ...
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="mx-auto flex items-center mt-6 containers">
      <Link href="/">
        <a title="home" className="logo mr-auto">
          <Image
            alt="Home"
            src="/logo.png"
            layout="responsive"
            width="277"
            height="109"
            priority={true}
          />
        </a>
      </Link>
      <div
        className={`left-0 bg-zinc-200 flex felx-wrap mr-4 fixed inset-y-0 w-full transition-transform overflow-y-auto  duration-700 delay-300 z-50 ${
          !nav ? 'translate-y-[-100%]' : ''
        } dark:bg-skyly`}
      >
        <ul className="sm:pl-[40%] pt-40 z-50">
          {props.links.map((item, key) => {
            return (
              <li key={key}>
                <Link href={item.link}>
                  <a
                    onClick={handleMenu}
                    title={item.name}
                    className="px-3 font-display text-onion text-5xl pt-10 block cursor-pointer"
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {mounted && (
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={handleDarkMode}
        >
          <Light mode={resolvedTheme} />
        </button>
      )}

      <div
        className={`menu__lines block relative w-20 h-4 z-50  ${
          nav ? 'open' : 'close'
        } dark:before:bg-gray-500 dark:after:bg-gray-500 cursor-pointer`}
        onClick={handleMenu}
      ></div>
      <div className="absolute bg-red w-1 h-1"></div>
    </nav>
  );
};

export default Navbar;
