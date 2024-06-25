import { useState } from "react";

export default function Like(props) {
  const [liked, setLiked] = useState(props.isLiked);
  const [likes, setLikes] = useState(props.likes);

  const handleClick = () => {
    const newIsLiked = !liked;
    setLiked(newIsLiked);
    setLikes(newIsLiked ? likes + 1 : likes - 1);
  };

  return (
    <div className="flex justify-content-center items-center">
      <span className="text-sm">{likes}</span>
      <span
        onClick={handleClick}
        className={`${liked ? "text-red-500" : ""} cursor-pointer ml-2 text-xl`}
      >
        ♥️
      </span>
    </div>
  );
}
