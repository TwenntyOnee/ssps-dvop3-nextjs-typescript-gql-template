import type { NextPage } from "next";
import Link from "next/link";
import {
  useGetCategoriesQuery,
  useGetPostsQuery,
} from "../generated/graphql-types";

/**
 *
 * @return {NextPage} Homepage
 */
const Home: NextPage = () => {
  const queryResponse = useGetPostsQuery();
  const { data, loading, error } = queryResponse;

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery();

  return (
    <div
      style={{
        margin: "0 2rem",
      }}
    >
      <div>
        <h1 className="text-2xl text-red-700">Generovaný query Page</h1>
        <Link href={"/manual-gql"}>
          <a>
            <button>Manuální query a types</button>
          </a>
        </Link>
      </div>
      <div className="">
        <h1>
          <b>Kategorie</b>
        </h1>
        {loadingCategories ? (
          <p>Načítání</p>
        ) : errorCategories ? (
          <p>Error</p>
        ) : (
          <div>
            {dataCategories?.categories?.nodes?.map((item) => (
              <div key={item?.id}>
                <p>Name: {item?.name}</p>
                <p>Slug: {item?.slug}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occurred.</p>
      ) : !data?.posts?.edges ? (
        <p>No posts found.</p>
      ) : (
        data?.posts?.edges.map((post) => {
          return (
            <article
              key={post?.node?.id}
              style={{
                border: "2px solid #eee",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "10px",
              }}
            >
              <h2>{post?.node?.title}</h2>
              <p>Slug: {post?.node?.slug}</p>
              <p>Autor id: {post?.node?.authorId}</p>
            </article>
          );
        })
      )}
    </div>
  );
};

export default Home;
