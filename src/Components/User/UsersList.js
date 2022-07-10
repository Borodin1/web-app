import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="usersList">
      <div className="users">
        {users.map((user) => (
          <div className="user" key={user.id}>
            <img src={user.photo} alt={user.id} />
            <h2> {user.fullName}</h2>
            <Link to={`/userProfile/${user.id}`}>Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
