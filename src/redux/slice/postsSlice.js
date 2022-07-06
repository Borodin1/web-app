import { createSlice } from "@reduxjs/toolkit";
import initialState from "../state/postsState";
import { nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
  },
  postUpdated(state, action) {
    const { id, title, content } = action.payload;
    const existingPost = state.find((post) => post.id === id);
    if (existingPost) {
      existingPost.title = title;
      existingPost.content = content;
    }
  },
  reactionAdded(state, action) {
    const { postId, reaction } = action.payload;
    const existingPost = state.find((post) => post.id === postId);
    if (existingPost) {
      existingPost.reactions[reaction]++;
    }
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
