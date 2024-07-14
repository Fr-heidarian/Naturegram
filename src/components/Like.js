import { useState } from "react";
import { BASE_URL, POSTS_URL } from "../api/config";

export default function Like(props) {
  const [liked, setLiked] = useState(props.isLiked);
  const [likes, setLikes] = useState(props.likes);

  const handleClick = async (e) => {
    e.stopPropagation();
    const newIsLiked = !liked;
    setLiked(newIsLiked);
    setLikes(newIsLiked ? likes + 1 : likes - 1);

    try {
      const response = await fetch(`${BASE_URL}/${POSTS_URL}/${props.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          likes: newIsLiked ? likes + 1 : likes - 1,
          isLiked: newIsLiked,
        }),      
      });

    } catch (e) {
      console.log(e);
    }
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
