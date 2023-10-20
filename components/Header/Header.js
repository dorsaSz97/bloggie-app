import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
