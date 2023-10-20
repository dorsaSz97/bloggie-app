import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className="flex justify-between">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
