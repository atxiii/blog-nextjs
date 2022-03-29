import Navbar from './nav';
import { customize } from '_api';

const Header = () => {
  return (
    <header>
      <Navbar links={customize.menu} />
      <div className="containers">
        <span className="h-[2px] w-full bg-onion block"></span>
      </div>
    </header>
  );
};

export default Header;
