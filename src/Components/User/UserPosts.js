import React from "react";
import { useSelector } from "react-redux";

export const UserPosts = () => {
  const userId = useSelector((state) => state.users.id);
  const postsUser = useSelector((state) =>
    state.posts.filter((posts) => posts.user === userId)
  );
  console.log(postsUser);
  if (!postsUser) {
    <h2>Don't find any your posts!</h2>;
  }
  return (
    <div>
      <h2>{postsUser.title}</h2>
    </div>
  );
};
