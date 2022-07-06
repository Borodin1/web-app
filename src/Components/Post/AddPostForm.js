import React, { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../../redux/slice/postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onTitleAdd = (e) => setTitle(e.target.value);
  const onContentAdd = (e) => setContent(e.target.value);
  const onAuthorAdd = (e) => setUserId(e.target.value);

  const onCreatePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.firstName}
    </option>
  ));

  return (
    <div className="postAdd">
      <h2>What's on your mind?</h2>
      <div>
        <div className="titleBlock">
          <label htmlFor="postTitle">Post Title: </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleAdd}
          />
        </div>
        <div className="authorBlock">
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorAdd}>
            <option value=""></option>
            {userOptions}
          </select>
        </div>
        <div className="contentBlock">
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentAdd}
          />
        </div>
        <div className="buttonPost">
          <button type="button" onClick={onCreatePost} disabled={!canSave}>
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};
