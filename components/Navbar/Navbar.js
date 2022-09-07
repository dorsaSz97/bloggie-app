import React from 'react';
import Link from 'next/link';

const NAV_LINKS = ['Home', 'Services', 'About Us', 'Contacts'];

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-10 text-customLight">
        {NAV_LINKS.map(link => {
          return (
            <li key={link} className="p-2 hover:opacity-80 transition-all">
              <Link href="/">{link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
