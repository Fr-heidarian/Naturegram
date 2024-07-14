import { useQuery } from "@tanstack/react-query";
import { readPosts } from "../api/postsApi";
import PostCard from "../components/PostCard";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("title");

  const [page, setPage] = useState(1);
  const [loadIsFinished, setLoadIsFinished] = useState(false);

  const {
    isPending,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts", page, query],
    queryFn: () => readPosts(page, query),
  });

  useEffect(() => {
    if (posts && posts.length < 5) {
      setLoadIsFinished(true);
    }
  }, [posts]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="container mt-2">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      <div
        className="flex justify-center items-center p-3 m-3 text-xl hover:cursor-pointer w-2/5 mx-auto"
        onMouseEnter={() => {
          if (loadIsFinished) return;
          setPage((previousPage) => previousPage + 1);
        }}
      >
        Hover To Load More...
      </div>
    </div>
  );
}
