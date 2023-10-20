// /---/---/....

import { getFeaturedPosts, getSinglePost } from '../helpers/index';
import PostDetailPageLayout from '../components/PostDetailPageLayout';

const PostDetailPage = ({ post }) => {
  // const router = useRouter();
  // if (router.isFallback) return <p>Loading...</p>;
  // if (!post) return <p>404</p>;

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
    // build these paths at build time
    // other requested paths should be generated at runtime
    // true => handle loading (with isFallback prop of the router object) and not having data (there is no 404 in this case)
    // blocking => 404 would be shown if nothing exists and if it does, blocks the ui to create it
    // new paths not returned by getStaticPaths will wait for the HTML to be generated
    // fallback: true,
    fallback: 'blocking',
    paths: paths,
  };
}
