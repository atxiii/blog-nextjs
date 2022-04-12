import NavbarSimple from './nav2';
import { customize } from '_api';

const Header = () => {
  return (
    <header>
      <NavbarSimple links={customize.menu} />
    </header>
  );
};

export default Header;
