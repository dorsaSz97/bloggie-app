import React from 'react';
import Link from 'next/link';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const indicators = () => (
  <div className="indicator w-4 h-4 bg-customLight rounded-full cursor-pointer"></div>
);

const FeaturedsSlider = ({ featuredPosts }) => {
  return (
    <section className="relative mx-auto rounded-[70px] overflow-hidden w-[1312px] sliderContainer">
      <Slide indicators={indicators} arrows={false} autoplay={true}>
        {featuredPosts.map(ftPost => {
          return (
            <Link
              key={ftPost.slug}
              href={`/${ftPost.category.slug}/${ftPost.slug}`}
            >
              <a className="block w-full h-full">
                <article
                  className="relative flex flex-col gap-5 h-[380px] w-full p-10 text-center w-[1312px] text-customLight"
                  style={{
                    backgroundImage: `url(${ftPost.photo.url})`,
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="absolute w-full h-full top-0 left-0 bg-customBlack opacity-60 z-1"></div>
                  <h3 className="relative text-3xl font-bold capitalize z-5">
                    {ftPost.title}
                  </h3>
                  <p className="relative text-lg capitalize z-5">
                    {ftPost.shortDesc}
                  </p>
                </article>
              </a>
            </Link>
          );
        })}
      </Slide>
    </section>
  );
};

export default FeaturedsSlider;
