import { BASE_URL, POSTS_URL } from "./config";

export const readPosts = async (searchParams) => {
  const response = await fetch(
    `${BASE_URL}/${POSTS_URL}?title_like=${searchParams ?? ""}`
  );
  if (response.status === 200) {
    const posts = await response.json();

    return posts;
  } else {
    throw new Error(response.status);
  }
};

export const readPost = async (postId) => {
  console.log(postId);
  const response = await fetch(`${BASE_URL}/${POSTS_URL}/${postId}`);
  if (response.status === 200) {
    const post = await response.json();

    return post;
  } else {
    throw new Error(response.status);
  }
};

export const createPost = async (newPost) => {
  const response = await fetch(`${BASE_URL}/${POSTS_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  if (response.status === 201) {
    const post = await response.json();
    return post;
  } else {
    throw new Error(response.status);
  }
};
