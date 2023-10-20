import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = ['Home', 'Services', 'About Us', 'Contacts'];

const Navbar = () => {
  const [showBurgerMwnu, setShowBurgerMwnu] = useState(false);

  const links = NAV_LINKS.map(link => {
    return (
      <li
        key={link}
        className="flex-1 nav-item p-2 hover:opacity-80 transition-all"
        onClick={() => setShowBurgerMwnu(false)}
      >
        <Link href="/">{link}</Link>
      </li>
    );
  });

  return (
    <>
      <div className=" relative flex gap-4 flex-col p-3 lg:hidden">
        <button
          className="self-end"
          onClick={() => setShowBurgerMwnu(prev => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {showBurgerMwnu && (
          <ul
            className="absolute top-full right-0 flex items-center gap-8
         text-customLight text-right flex-wrap bg-customText bg-opacity-20 backdrop-blur p-4 rounded-2xl mr-3 md:flex-nowrap md:bg-transparent md:p-0 md:blur-none"
          >
            {links}
          </ul>
        )}
      </div>
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center gap-10 text-customLight">{links}</ul>
      </nav>
    </>
  );
};

export default Navbar;
