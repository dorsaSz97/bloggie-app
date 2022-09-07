import React from 'react';

import Header from '../Header';
import Hero from '../Hero';
import FeaturedsSlider from '../FeaturedsSlider';
import PostsGrid from '../PostsGrid/PostsGrid';
import Footer from '../Footer';

const HomeLayout = ({ featuredPosts, categories, posts }) => {
  return (
    <>
      <Header />

      <main>
        <Hero categories={categories} />

        <FeaturedsSlider featuredPosts={featuredPosts} />

        <PostsGrid posts={posts} />
      </main>

      <Footer />
    </>
  );
};

export default HomeLayout;
