import NavbarSimple from './navbar';
import { customize } from '_api';

const Header = () => {
  return (
    <header>
      <NavbarSimple links={customize.menu} />
    </header>
  );
};

export default Header;
