// /---
import Head from 'next/head';

import {
  getFeaturedPosts,
  getCategorizedPosts,
  getCategories,
} from '../helpers';
import HomeLayout from '../components/HomeLayout';

// we couldnt store these things in the context from the homepage and access them here, because maybe someone just entered this url
const CategorizedPage = ({
  featuredPosts,
  categories,
  posts,
  currCategory,
}) => {
  // const router = useRouter();
  // const currCategory = router.query.category;

  // Capitalize
  const currCategoryName = currCategory
    .slice(0, 1)
    .toUpperCase()
    .concat(currCategory.slice(1));

  return (
    <>
      <Head>
        <title className="capitalize">{currCategoryName} Articles</title>
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
    // there is no other paths, only generate these ones at build time
    // any other route => 404
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
