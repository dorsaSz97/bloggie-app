import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchForm = () => {
  const router = useRouter();
  const [searchInputValue, setSearchInputValue] = useState('');

  const searchChangeHandler = e => {
    setSearchInputValue(e.target.value);
  };

  const searchSubmitHandler = e => {
    e.preventDefault();

    setSearchInputValue('');

    router.push(`/search/query?q=${searchInputValue}`);
  };

  return (
    <form onSubmit={searchSubmitHandler} className="w-1/3">
      <input
        type="text"
        placeholder="Search..."
        onChange={searchChangeHandler}
        value={searchInputValue}
        className="px-4 py-3 w-full rounded-full bg-customGrey text-lg border-2 border-transparent outline-none focus:border-customBlue placeholder:text-[16px]"
      />
    </form>
  );
};

export default SearchForm;
