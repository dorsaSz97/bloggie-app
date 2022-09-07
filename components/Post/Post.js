/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import CalenderIcon from '../Icons/CalenderIcon';

const Post = ({ post }) => {
  return (
    <div className="flex flex-col">
      <Link href={`/${post.category.slug}/${post.slug}`}>
        <a className="block">
          <figure className="relative mb-3 rounded-xl overflow-hidden">
            <img
              src={post.photo.url}
              alt={post.title}
              className="rounded-4xl h-[500px] object-cover"
            />
            <figcaption className="absolute bottom-4 left-1/2 bg-customLight rounded-full -translate-x-1/2 pr-4">
              <div className="flex gap-5 items-center">
                <img
                  src={post.author.profilePic.url}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-customBlack text-sm">{post.author.name}</p>
              </div>
            </figcaption>
          </figure>
        </a>
      </Link>

      <h3 className="text-2xl capitalize font-bold mb-5">{post.title}</h3>

      <p className="text-customText capitalize mb-10">{post.shortDesc}</p>

      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-6">
          <CalenderIcon />
          <time className="text-customText">
            {post.dateCreated.split('-').join('/')}
          </time>
        </div>
        <Link href={`/${post.category.slug}/${post.slug}`}>
          <a className="block py-5 text-center border-customText border-2 rounded-full transition-all hover:bg-customBlue hover:border-customBlue">
            Read More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
