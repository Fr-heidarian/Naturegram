import { useQuery } from "@tanstack/react-query";
import { readPosts } from "../api/postsApi";

export default function HomePage() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: readPosts,
  });

  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return <div>HomePage</div>;
}
