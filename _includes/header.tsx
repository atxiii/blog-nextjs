import Navbar from './nav';

const Header = () => {
  const links = [
    {
      name: 'Home',
      link: '/',
      img: '/mockup/me.jpg',
    },
    {
      name: 'About',
      link: '/about',
      img: '/mockup/rick.jpg',
    },
    {
      name: 'Blog',
      link: '/blog',
      img: '/mockup/cover.jpg',
    },
  ];
  return (
    <header>
      <Navbar links={links} />
    </header>
  );
};

export default Header;
