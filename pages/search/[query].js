import {
  getSearchedPosts,
  getCategories,
  getFeaturedPosts,
} from '../../helpers';

import HomeLayout from '../../components/HomeLayout/HomeLayout';

const SearchedPostsPage = ({ posts, categories, featuredPosts }) => {
  // if the search page wasnt separate and we didnt want the specific url for the users to pass around and be able to access the same page, we could use api/search?{searchQ} and do the filtering in the api folder
  return (
    <HomeLayout
      featuredPosts={featuredPosts}
      categories={categories}
      posts={posts}
    />
  );
};

export default SearchedPostsPage;

export async function getServerSideProps(context) {
  const posts = await getSearchedPosts(context.query.q);
  const categories = await getCategories();
  const featuredPosts = await getFeaturedPosts();

  return {
    props: { categories, featuredPosts, posts },
  };
}
