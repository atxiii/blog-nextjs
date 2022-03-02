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
  return (
    <header>
      <Navbar links={links} />
    </header>
  );
};

export default Header;
