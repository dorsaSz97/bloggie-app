import { request, gql } from 'graphql-request';

export const getHomePageData = async () => {
  const query = gql`
    query HomePageData {
      posts(first: 24) {
        photo {
          url
        }
        author {
          name
          profilePic {
            url
          }
        }
        title
        slug
        shortDesc
        dateCreated
        category {
          slug
        }
        featured
      }
      categories {
        name
        slug
      }
    }
  `;

  const data = await request(
    'https://api-eu-central-1.hygraph.com/v2/cl73fkilu3flp01uo2tn4hssc/master',
    query
  );

  return data;
};

export const getCategories = async () => {
  const query = gql`
    query Categories {
      categories {
        slug
        name
      }
    }
  `;

  const data = await request(
    'https://api-eu-central-1.hygraph.com/v2/cl73fkilu3flp01uo2tn4hssc/master',
    query
  );

  return data.categories;
};

export const getCategorizedPosts = async selectedCategory => {
  const variables = {
    selectedCategory: selectedCategory,
  };

  const query = gql`
    query CategorizedPosts($selectedCategory: String!) {
      posts(where: { category: { slug: $selectedCategory } }) {
        photo {
          url
        }
        author {
          name
          profilePic {
            url
          }
        }
        title
        slug
        shortDesc
        dateCreated
        category {
          slug
          name
        }
      }
    }
  `;

  const data = await request(
    'https://api-eu-central-1.hygraph.com/v2/cl73fkilu3flp01uo2tn4hssc/master',
    query,
    variables
  );

  return data.posts;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query FeaturedPosts {
      posts(where: { featured: true }, first: 3, orderBy: dateCreated_ASC) {
        photo {
          url
        }
        title
        slug
        shortDesc
        category {
          slug
        }
      }
    }
  `;

  const data = await request(
    'https://api-eu-central-1.hygraph.com/v2/cl73fkilu3flp01uo2tn4hssc/master',
    query
  );

  return data.posts;
};

export const getSearchedPosts = async searchQ => {
  const variables = {
    searchQ,
  };

  const query = gql`
    query FilteredPosts($searchQ: String!) {
      posts(where: { title_contains: $searchQ }) {
        author {
          name
          profilePic {
            url
          }
        }
        photo {
          url
        }
        title
        shortDesc
        dateCreated
        slug
        category {
          slug
          name
        }
      }
    }
  `;

  const data = await request(
    'https://api-eu-central-1.hygraph.com/v2/cl73fkilu3flp01uo2tn4hssc/master',
    query,
    variables
  );

  return data.posts;
};

export const getSinglePost = async postSlug => {
  const variables = {
    postSlug,
  };

  const query = gql`
    query SinglePost($postSlug: String!) {
      post(where: { slug: $postSlug }) {
        photo {
          url
        }
        title
        shortDesc
        slug
        author {
          name
          profilePic {
            url
          }
        }
        dateCreated
        fullDesc {
          html
        }
        category {
          slug
        }
      }
    }
  `;

  const data = await request(
    'https://api-eu-central-1.hygraph.com/v2/cl73fkilu3flp01uo2tn4hssc/master',
    query,
    variables
  );

  return data.post;
};

export const submitComment = async commentObj => {
  const data = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(commentObj),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.json();
};
export const getComments = async slug => {
  const variables = { slug };

  const query = gql`
    query Comments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        content
        name
      }
    }
  `;

  const data = await request(
    'https://api-eu-central-1.hygraph.com/v2/cl73fkilu3flp01uo2tn4hssc/master',
    query,
    variables
  );

  return data.comments;
};
