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
    <div>
      {likes}
      <span
        onClick={handleClick}
        className={`${liked ? "text-red-500" : ""} cursor-pointer`}
      >
        ♥️
      </span>
    </div>
  );
}
