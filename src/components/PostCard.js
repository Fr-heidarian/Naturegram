import { Link } from "react-router-dom";
import Like from "./Like";

export default function PostCard({ post }) {
  const {
    profileImage,
    profileName,
    imageUrl,
    title,
    likes,
    isLiked,
    description,
    id
  } = post;

  return (
    <Link to={`/posts/${id}`}>
      <div className="flex flex-col w-2/5 bg-white rounded-xl mx-auto my-5 hover:border hover:border-hoverBorderColor">
        <div className="p-2">
          <img
            src={profileImage}
            alt="author"
            className="w-14 h-14 rounded-full"
          />
          <h2>{profileName}</h2>
        </div>
        <img src={imageUrl} alt="blog pic" />
        <div className="flex justify-between p-2">
          <h2 className="font-bold">{title}</h2>
          <Like likes={likes} isLiked={isLiked} />
        </div>
        <p className="p-2 text-sm">{description.substring(0, 50)}</p>
      </div>
    </Link>
  );
}
