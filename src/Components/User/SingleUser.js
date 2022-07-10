import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserPosts } from "./UserPosts";

export const SingleUser = () => {
  const { userId } = useParams();

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );
  if (!user) {
    <div>
      <h2>User not found!</h2>
    </div>;
  }
  return (
    <div className="user">
      <div className="userPhotoName">
        <img src={user.photo} alt={user.name} />
        <h2>{user.fullName}</h2>
      </div>
      <UserPosts />
    </div>
  );
};
