import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Links {
  name: string;
  link: string;
}

const Navbar = (props: { links: Array<Links> }) => {
  let [nav, setNav] = useState(false);

  const handleMenu = () => setNav(!nav);

  return (
    <nav className="mx-auto flex items-center mt-6">
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
        className={`left-0 bg-black flex felx-wrap mr-4 fixed inset-y-0 w-full transition-transform overflow-y-auto  duration-700 delay-300 z-50 ${
          !nav ? 'translate-y-[-100%]' : ''
        }`}
      >
        <ul className="sm:pl-[40%] pt-40 z-50">
          {props.links.map((item, key) => {
            return (
              <li key={key}>
                <Link href={item.link}>
                  <a
                    onClick={handleMenu}
                    title={item.name}
                    className="px-3 font-display text-white text-5xl pt-10 block cursor-pointer"
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="search mx-4">
        <Image
          src="/search.png"
          alt="Search"
          layout="responsive"
          width="30"
          height="28"
          priority={true}
        />
      </div>
      <div
        className={`menu__lines block relative w-8 h-4 z-50 ${
          nav ? 'open' : 'close'
        }`}
        onClick={handleMenu}
      ></div>
      <div className="absolute bg-red w-1 h-1"></div>
    </nav>
  );
};

export default Navbar;
