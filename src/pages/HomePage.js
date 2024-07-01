import { useQuery } from "@tanstack/react-query";
import { readPosts } from "../api/postsApi";
import PostCard from "../components/PostCard";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("title");

  const {
    isPending,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts", query],
    queryFn: () => readPosts(query),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="container">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}
