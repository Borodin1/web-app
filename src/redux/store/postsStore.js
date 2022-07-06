import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice/postsSlice";
import usersReducer from "../slice/usersSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
