import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createPost } from "../api/postsApi";

export default function CreateNewPage() {
  const [author, setauthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const mutation = useMutation({
    mutationFn: (newPost) => {
      createPost(newPost);
    },
  });

  const handleCreateNew = (e) => {
    e.preventDefault();

    mutation.mutate({
      profileName: author,
      title,
      description,
      isLiked,
      likes: Math.floor(Math.random() * 9991),
    });
  };

  return (
    <div className="flex items-center justify-center flex-col p-2">
      <form className="w-2/5">
        <label>
          Author
          <input
            type="text"
            id="author"
            className="w-full p-3 m-2 border border-borderGray rounded box-border"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            id="title"
            className="w-full p-3 m-2 border border-borderGray rounded box-border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description
          <textarea
            id="description"
            className="w-full p-3 m-2 border border-borderGray rounded box-border h-40"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          IsLiked?
          <input
            type="checkbox"
            id="isLiked"
            value={isLiked}
            onChange={(e) => setIsLiked(e.target.checked)}
          />
        </label>
        <div className="flex justify-center">
          <button
            onClick={handleCreateNew}
            className="bg-buttonColor text-white p-3 m-2 rounded hover:bg-buttonHoverColor"
          >
            Create New
          </button>
        </div>
      </form>
    </div>
  );
}
