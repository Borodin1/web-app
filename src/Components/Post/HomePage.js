import React from "react";

import { PostsList } from "../Post/PostsList";
import { AddPostForm } from "../Post/AddPostForm";

export const HomePage = () => {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  );
};
