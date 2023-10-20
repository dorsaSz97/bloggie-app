import React from 'react';

import SearchForm from '../SearchForm';
import Categories from '../Categories';

const Hero = ({ categories }) => {
  return (
    <section className="py-20">
      <h2 className="text-5xl capitalize mb-7 lg:mb-10">
        Discover the latest articles here
      </h2>
      <p className="text-lg text-customText mb-12 lg:mb-7">
        All the articles have been updated recently. <br /> Here your can search
        for your favorite content.
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-4">
        <SearchForm />
        <Categories categories={categories} />
      </div>
    </section>
  );
};

export default Hero;
