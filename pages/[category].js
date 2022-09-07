import Head from 'next/head';
import {
  getFeaturedPosts,
  getCategorizedPosts,
  getCategories,
} from '../helpers';

import HomeLayout from '../components/HomeLayout';

const CategorizedPage = ({
  featuredPosts,
  categories,
  posts,
  currCategory,
}) => {
  // we couldnt store these things in the context from the homepage and access them here, because maybe someone just entered this url
  const currCategoryName = currCategory
    .slice(0, 1)
    .toUpperCase()
    .concat(currCategory.slice(1));

  return (
    <>
      <Head>
        <title>{currCategoryName} Articles</title>
        <meta
          name="description"
          content={`${currCategoryName} related articles`}
        />
      </Head>
      <HomeLayout
        categories={categories}
        featuredPosts={featuredPosts}
        posts={posts}
      />
    </>
  );
};

export default CategorizedPage;

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories.map(category => {
    return {
      params: {
        category: category.slug,
      },
    };
  });

  return {
    fallback: false,
    paths: paths,
  };
}
export async function getStaticProps(context) {
  const { category } = context.params;

  const categories = await getCategories();
  const featuredPosts = await getFeaturedPosts();
  const posts = await getCategorizedPosts(category);

  return {
    props: {
      currCategory: category,
      categories,
      featuredPosts,
      posts,
    },
    revalidate: 3600,
  };
}
