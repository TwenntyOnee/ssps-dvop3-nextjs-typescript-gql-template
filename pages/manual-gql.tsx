import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

interface Post {
  databaseId: number;
  title: string;
  slug: string;
}

interface PostEdge {
  node: Post;
}

const POSTS_PER_PAGE = 10;

const GET_POSTS = gql`
  query getPosts {
    posts {
      edges {
        node {
          id
          databaseId
          title
          slug
        }
      }
    }
  }
`;

/**
 * Page CSR
 *
 * @return {JSX.Element} CSR page components
 */
const ManualGql = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const posts = data?.posts?.edges?.map((edge: PostEdge) => edge.node) || [];
  const havePosts = Boolean(posts.length);

  return (
    <div
      style={{
        margin: "0 2rem",
      }}
    >
      <h1 className="text-2xl text-red-700">Manuální query Page</h1>
      <Link href={"/"}>
        <a>
          <button>Manuální query a types</button>
        </a>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occurred.</p>
      ) : !havePosts ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post: Post) => {
          return (
            <article
              key={post.databaseId}
              style={{
                border: "2px solid #eee",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "10px",
              }}
            >
              <h2>{post.title}</h2>
              <p>{post.slug}</p>
            </article>
          );
        })
      )}
    </div>
  );
};
export default ManualGql;
