import { useQuery } from "@tanstack/react-query";
import { readPosts } from "../api/postsApi";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const {
    isPending,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: readPosts,
  });

  console.log(posts);

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
