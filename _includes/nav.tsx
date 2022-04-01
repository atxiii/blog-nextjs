import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Light from './Icons/light';
import tw from 'twin.macro';
import { gsap } from 'gsap';

const Menu = tw.div`fixed bg-transparent w-screen flex justify-center items-center right-[-200vw] overflow-hidden h-screen top-[50vh] z-0`;

const ShadowMenu = tw.span`rounded transform-gpu rotate-[30] fixed bg-gray-200 dark:bg-gray-900 w-screen flex justify-center items-center h-[5%]`;

interface Links {
  name: string;
  link: string;
  img: string;
}

const Navbar = ({ links }: { links: Array<Links> }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  let [nav, setNav] = useState(false);

  const handleMenu = () => setNav(!nav);

  const handleDarkMode = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  // when user Mounted ...
  useEffect(() => setMounted(true), []);

  // navbar animation
  useEffect(() => {
    const t1 = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: 'power2.inOut',
      },
    });

    const closeBtn = document.querySelector('.menu__close');
    const menuLinks = document.querySelectorAll('.nav__menu ul li a');

    // animate if click on menu links
    if (menuLinks) {
      menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', () => {
          t1.reverse();
          t1.reversed(true);
        });
      });
    }

    // animate if click on close button
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        t1.reverse();
        t1.reversed(true);
      });
    }

    // animate after click on hambergur
    if (nav) {
      console.log(t1.reversed());
      if (t1.reversed()) {
        console.log('played', t1.reversed());
        t1.timeScale(0.5).play();
      } else {
        t1.reversed(false);
        t1.totalTime(0.5);
        t1.to('.menu__open', { opacity: 0 })
          .to('.nav__menu', { zIndex: 50 })
          .to('.nav__shadow', {
            right: 0,
          })
          .to('.nav__shadow', {
            top: 0,
            height: '100vh',
          })
          .to('.nav__menu', { top: 0, right: 0 })
          .to('.menu__close', { opacity: 1 })

          .to('.nav__menu ul li a , .marquee', {
            opacity: 1,
            pointerEvents: 'all',
            stagger: 0.2,
          });
      }
    }
  });

  if (!mounted) return null;

  return (
    <nav className="nav mx-auto flex items-center containers z-0">
      <Link href="/">
        <a title="home" className="logo mr-auto z-10">
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
      <Menu className="nav__menu">
        <ShadowMenu className="top-[15vh] nav__shadow"></ShadowMenu>
        <ShadowMenu className="top-[30vh] nav__shadow"></ShadowMenu>
        <ShadowMenu className="top-[45vh] nav__shadow"></ShadowMenu>
        <ShadowMenu className="top-[60vh] nav__shadow"></ShadowMenu>
        <ShadowMenu className="top-[75vh] nav__shadow"></ShadowMenu>

        <ul className="pt-10 relative">
          {links.map((item, key) => {
            return (
              <li key={key} className="nav__item w-screen group">
                <Link href={item.link}>
                  <a
                    onClick={handleMenu}
                    title={item.name}
                    className="nav__link font-display pl-40 px-3 text-xl md:text-[10vw] md:leading-snug opacity-0	block cursor-pointer z-1 dark:text-gray-300 text-gray-900"
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Menu>
      {mounted && (
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="z-10 w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={handleDarkMode}
        >
          <Light mode={resolvedTheme} />
        </button>
      )}
      <div className="nav__humberger">
        <div
          className={`menu__lines menu__open  block relative w-20 h-4 z-50 opacity-1 ${
            nav ? 'open hidden' : 'close block'
          } dark:before:bg-gray-500 dark:after:bg-gray-500 cursor-pointer`}
          onClick={handleMenu}
        ></div>
        <div
          className={`menu__lines menu__close  block relative w-20 h-4 z-50 opacity-0 ${
            nav ? 'open block' : 'close hidden'
          } dark:before:bg-gray-500 dark:after:bg-gray-500 cursor-pointer`}
          onClick={handleMenu}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
