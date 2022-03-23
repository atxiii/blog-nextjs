import Navbar from './nav';
import { customize } from '_api';

const Header = () => {
  return (
    <header>
      <Navbar links={customize.menu} />
    </header>
  );
};

export default Header;
