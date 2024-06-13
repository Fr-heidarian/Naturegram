import { BASE_URL, POSTS_URL } from "./config";

export const readPosts = async () => {
  const response = await fetch(`${BASE_URL}/${POSTS_URL}`);
  if (response.status === 200) {
    const posts = await response.json();

    return posts;
  } else {
    throw new Error(response.status);
  }
};
