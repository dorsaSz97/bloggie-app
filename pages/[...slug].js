import { getFeaturedPosts, getSinglePost } from '../helpers/index';

import PostDetailPageLayout from '../components/PostDetailPageLayout';

const PostDetailPage = ({ post }) => {
  return <PostDetailPageLayout post={post} />;
};

export default PostDetailPage;

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug[1]);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  // statically building the most important articles of the site which are the featured ones
  const posts = await getFeaturedPosts();

  const paths = posts.map(post => {
    return { params: { slug: [post.category.slug, post.slug] } };
  });

  return {
    fallback: 'blocking', // if it was true we should have handled the possibility of not having the data in the page component above (because it takes a while if the path wasnt set before)
    paths: paths,
  };
}
