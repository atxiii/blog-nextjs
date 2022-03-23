import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Light from './Icons/light';

interface Links {
  name: string;
  link: string;
  img: string;
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
    <nav className="nav mx-auto flex items-center containers">
      <Link href="/">
        <a title="home" className="logo mr-auto">
          <Image
            alt="Home"
            src={
              resolvedTheme === 'light' ? '/logo.png' : '/dark-logo.png'
            }
            layout="responsive"
            width="277"
            height="109"
            priority={true}
          />
        </a>
      </Link>
      <div
        className={`nav__menu left-0 bg-slate-50 flex felx-wrap mr-4 fixed inset-y-0 w-full transition-transform overflow-y-auto  duration-700 delay-300 z-50 ${
          !nav ? 'translate-y-[-100%]' : ''
        } dark:bg-skyly`}
      >
        <ul className="pt-10 z-50">
          {props.links.map((item, key) => {
            return (
              <li
                key={key}
                className="nav__item relative overflow-hidden w-screen group"
              >
                <Link href={item.link}>
                  <a
                    onClick={handleMenu}
                    title={item.name}
                    className="nav__link font-display pl-40 px-3 text-black text-xl md:text-[10vw] md:leading-snug	 block cursor-pointer z-1"
                  >
                    {item.name}
                  </a>
                </Link>
                <div className="marquee -z-50 ">
                  <div className="marquee__inner">
                    <span className="font-display text-onion">
                      {item.name}
                    </span>
                    <span className="font-display text-onion">
                      {item.name}
                    </span>
                    <span className="font-display text-onion">
                      {item.name}
                    </span>
                    <span className="font-display text-onion">
                      {item.name}
                    </span>
                  </div>
                </div>
                <figure className="nav___image fixed top-[10%] right-[10%] -z-50 opacity-0 skew-y-0  group-hover:skew-y-2 group-hover:-translate-y-3 translate-y-6 transition ease-in-out delay-150 duration-500">
                  <Image
                    src={item.img}
                    width="400px"
                    height="600px"
                    layout="intrinsic"
                    objectFit="cover"
                  />
                </figure>
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
        className={`menu__lines block relative w-20 h-4 z-50 ${
          nav ? 'open' : 'close'
        } dark:before:bg-gray-500 dark:after:bg-gray-500 cursor-pointer`}
        onClick={handleMenu}
      ></div>
      <div className="absolute bg-red w-1 h-1"></div>
    </nav>
  );
};

export default Navbar;
