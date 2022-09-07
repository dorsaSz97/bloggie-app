import React from 'react';

import Logo from '../Logo';
import Navbar from '../Navbar';

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-customText py-10 justify-between items-center flex">
      <Logo />
      <p className="text-customText text-sm w-[30%] text-right">
        &copy; All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
