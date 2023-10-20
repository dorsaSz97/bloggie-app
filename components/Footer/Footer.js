import React from 'react';

import Logo from '../Logo';
import Navbar from '../Navbar';

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-customText py-10 justify-between items-center flex">
      <Logo />
      <div className="text-customText text-sm w-[30%] text-right">
        <p>&copy; All Rights Reserved</p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/newspaper"
            title="newspaper icons"
          >
            Newspaper icons created by Freepik - Flaticon
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
