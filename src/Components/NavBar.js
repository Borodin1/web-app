import React from "react";

//router
import { Link } from "react-router-dom";

//icons
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const NavBar = () => {
  return (
    <div className="Web">
      <div className="navLinks">
        <Link to="/">
          <AiFillHome size={30} />
        </Link>
        <Link to="/friends">
          <FaUserFriends size={30} />
        </Link>
        <Link to="profile">
          <CgProfile size={30} />
        </Link>
      </div>
    </div>
  );
};
