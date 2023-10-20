import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Categories = ({ categories }) => {
  const router = useRouter();
  const { category: currCategory } = router.query;

  const activeClasses = 'bg-customBlue text-customLight';
  const inactiveClasses = 'bg-transparent text-customText';
  const linkClasses =
    'flex items-center justify-center h-full w-full py-2 px-4';

  return (
    <ul className="flex items-center gap-3 text-customText font-medium capitalize overflow-y-scroll w-full">
      <li
        className={`rounded-full 
          ${!currCategory ? activeClasses : inactiveClasses}`}
      >
        <Link href="/">
          <a className={linkClasses}>All</a>
        </Link>
      </li>

      {categories.map(category => {
        return (
          <li
            key={category.slug}
            className={`rounded-full
              ${
                currCategory === category.slug ? activeClasses : inactiveClasses
              }`}
          >
            <Link href={`/${category.slug}`}>
              <a className={linkClasses}>{category.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
