import React, { useState } from 'react';

import Post from '../Post';

const PER_PAGE = 6;

const PostsGrid = ({ posts }) => {
  const [clickedNumb, setClickedNumb] = useState(0);

  if (!posts || posts.length === 0)
    return <p className="py-40 text-center text-lg">No articles found :( </p>;

  return (
    <section className="py-20">
      <ul className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {posts.slice(0, (clickedNumb + 1) * PER_PAGE).map(post => {
          return <Post key={post.title} post={post} />;
        })}
      </ul>
      {(clickedNumb + 1) * PER_PAGE < posts.length && (
        <button
          onClick={() => setClickedNumb(prev => prev + 1)}
          className="mx-auto mt-16 block text-lg decoration-customBlue underline underline-offset-4"
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default PostsGrid;
