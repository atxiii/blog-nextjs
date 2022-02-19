import Navbar from './nav';

const Header = () => {
  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
  ];
  return <Navbar links={links} />;
};

export default Header;
