// /

import { getHomePageData } from '../helpers';
import HomeLayout from '../components/HomeLayout';

const HomePage = ({ categories, featuredPosts, posts }) => {
  return (
    <>
      <HomeLayout
        categories={categories}
        featuredPosts={featuredPosts}
        posts={posts}
      />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const { posts, categories } = await getHomePageData();
  const featuredPosts = posts.filter(post => post.featured === true);

  return {
    props: {
      categories,
      featuredPosts,
      posts,
    },
    revalidate: 3600, // update posts every hour
  };
}
