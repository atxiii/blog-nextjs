import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Light from './Icons/light';
import tw from 'twin.macro';
import { customize } from '_api';
import { LinkIcon } from './Icons/linkIcon';
import { gsap } from 'gsap';
import { Logo } from './Icons/logo';

const Menu = tw.div`opacity-0 md:opacity-100 overflow-hidden hidden md:flex justify-center items-center md:static fixed top-16 right-10 bg-gray-800/80 md:bg-transparent rounded w-[0] md:w-auto text-white md:text-black p-2 backdrop-blur md:backdrop-filter-none z-50`;

interface Links {
  name: string;
  link: string;
  img: string;
}

const NavbarSimple = ({ links }: { links: Array<Links> }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const darkModeStatus = customize.darkMode;

  let [nav, setNav] = useState(false);

  const handleMenu = () => setNav(!nav);

  const handleDarkMode = () => {
    if (darkModeStatus === 'off') return;
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  // when user Mounted ...
  useEffect(() => setMounted(true), []);

  // navbar animation
  useEffect(() => {
    const t1 = gsap.timeline({
      defaults: {
        duration: 0.2,
        ease: 'power2.inOut',
      },
    });

    const closeBtn = document.querySelector('.menu__hamburger__close');
    const menuLinks = document.querySelectorAll('.nav__menu ul li a');

    // animate if click on close button
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        t1.reverse();
        t1.reversed(true);
      });
    }

    // animate after click on hamburger
    if (nav) {
      if (t1.reversed()) {
        t1.timeScale(0.5).play();
      } else {
        t1.reversed(false);

        t1.to('.nav__menu', {
          opacity: '1',
          width: '80%',
          height: '100px',
          display: 'flex',
        }).to('.nav__menu-wrapper', {
          display: 'flex',
        });
      }
    }
  }, [nav]);
  if (!mounted) return null;

  return (
    <nav className="nav mx-auto flex items-center containers z-0 py-5">
      <Link href="/">
        <a title="home" className="mr-auto z-10">
          <h1 className="flex">
            <span className="relative ">
              <Logo mode={resolvedTheme} width="40" height="40" />
            </span>
            <span className="font-display text-4xl">Rick</span>
          </h1>
        </a>
      </Link>
      <Menu className="nav__menu">
        <ul className="nav__menu-wrapper hidden md:flex">
          {links.map((item, key) => {
            return (
              <li key={key} className="group">
                <Link href={item.link}>
                  <a
                    title={item.name}
                    className=" font-display px-3 text-xl md:leading-snug block cursor-pointer z-1 dark:text-white"
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Menu>
      {mounted && darkModeStatus === 'on' && (
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="z-10 w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={handleDarkMode}
        >
          <Light mode={resolvedTheme} />
        </button>
      )}
      <div>
        <button
          aria-label="hamburger"
          type="button"
          className={`${
            nav ? 'open hidden' : 'close block'
          } menu__hamburger__open opacity-100 md:hidden z-50 flex justify-center items-center z-10 w-9 h-9 ml-2 bg-slate-700 backdrop-blur-sm opacity-50 hover:opacity-100 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all`}
          onClick={handleMenu}
        >
          <span className="absolute bg-slate-100 w-[50%] h-[50%] rounded-full z-[3]"></span>
          <span className="absolute bg-slate-300 w-[60%] h-[60%] rounded-full z-[2]"></span>
          <span className="absolute bg-slate-500 w-[70%] h-[70%] rounded-full z-[1]"></span>
        </button>

        <button
          aria-label="hamburger"
          type="button"
          className={`${
            nav ? 'open block' : 'close hidden'
          } menu__hamburger__close opacity-0 md:hidden z-50 flex justify-center items-center z-10 w-9 h-9 ml-2 bg-slate-700 backdrop-blur-sm opacity-50 hover:opacity-100 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all`}
          onClick={handleMenu}
        >
          <span className="absolute bg-slate-100 w-[50%] h-[50%] rounded-full z-[3]"></span>
          <span className="absolute bg-slate-300 w-[60%] h-[60%] rounded-full z-[2]"></span>
          <span className="absolute bg-slate-500 w-[70%] h-[70%] rounded-full z-[1]"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavbarSimple;
