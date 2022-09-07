import { GraphQLClient, gql } from 'graphql-request';

const handler = async (req, res) => {
  const { email, name, message: content, slug } = req.body;

  const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation Comment(
      $name: String!
      $email: String!
      $content: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          content: $content
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: name,
    email: email,
    content: content,
    slug: slug,
  });

  return res.status(200).send(result);
};
export default handler;
