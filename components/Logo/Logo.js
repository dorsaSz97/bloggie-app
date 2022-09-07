import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center p-3 pl-0 text-3xl font-bold">
        <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full mr-1 bg-customBlue text-customLight">
          B
        </span>
        <h1>LOG</h1>
      </a>
    </Link>
  );
};

export default Logo;
