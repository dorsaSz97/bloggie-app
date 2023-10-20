/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import useSWR from 'swr';

import { getComments } from '../../helpers';
import BackIcon from '../Icons/BackIcon';
import Comments from '../Comments';

const PostDetailPageLayout = ({ post }) => {
  const router = useRouter();

  const { data, error } = useSWR(post.slug, getComments);
  const [comments, setComments] = useState(data);

  const [isCommentsShown, setCommentShown] = useState(false);

  useEffect(() => {
    const commentTimer = setTimeout(() => {
      setComments(data);
    }, 3000);
    return () => clearTimeout(commentTimer);
  }, [data]);

  return (
    <section className="flex flex-col pb-20">
      <button
        className="self-start rounded-full p-3 mb-10 bg-customBlue"
        onClick={() => router.back()}
      >
        <BackIcon />
      </button>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10  max-w-5xl mx-auto">
        <figure className="flex-1 h-[500px]">
          <img
            src={post.photo.url}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="flex-1 flex flex-col gap-3 ">
          <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl">
            {post.title}
          </h2>

          <p className="text-lg text-customLight opacity-75">
            {post.shortDesc}
          </p>
          <div className="flex font-regular text-[#999] gap-4 items-center mt-auto">
            <img
              src={post.author.profilePic.url}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <p className="text-sm">{post.author.name}</p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="mx-auto max-w-5xl text-justify leading-8 md:leading-10 opacity-82 text-[20px] tracking-wider">
          {parse(post.fullDesc.html, {
            replace: domNode => {
              if (domNode.name === 'p' && domNode.children.length === 0) {
                return <br />;
              }
            },
          })}
        </div>
      </div>

      <button
        onClick={() => setCommentShown(prev => !prev)}
        className="text-customLight bg-customBlue mx-auto py-2 capitalize px-2 rounded-full hover:text-customBlue hover:bg-transparent transition-all text-[1rem] mb-10"
      >
        {isCommentsShown ? 'hide comments' : 'show comments'}
      </button>

      <Comments
        comments={comments}
        isCommentsShown={isCommentsShown}
        slug={post.slug}
      />
    </section>
  );
};

export default PostDetailPageLayout;
