import { useQuery } from "@tanstack/react-query";
import { readPost } from "../api/postsApi";
import { useParams } from "react-router-dom";
import Like from "../components/Like";

export default function PostPage() {
  const { postId } = useParams();

  const {
    isPending,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => readPost(postId),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="flex w-3/4 bg-white rounded-xl mx-auto my-5 hover:border hover:border-hoverBorderColor">
      <img src={post.imageUrl} alt="blog pic" />

      <div className="p-5">
        <div className="flex items-center">
          <h2 className="font-bold mr-3 mb-3 mt-2">AUTHOR :</h2>
          <h2 className="mr-4">{post.profileName}</h2>
          <img
            src={post.profileImage}
            alt="author"
            className="w-14 h-14 rounded-full"
          />
        </div>

        <div className="flex">
          <h2 className="font-bold mr-3 mb-12">TITLE : </h2>
          <h2>{post.title}</h2>
        </div>
        <h2 className="font-bold mr-3 mb-1">DESCRIPTION : </h2>
        <p className="p-2 mb-4">{post.description}</p>
        <Like likes={post.likes} isLiked={post.isLiked} />
      </div>
    </div>
  );
}
