import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionsButton";

export const PostsList = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector(selectAllPost);

  const posts = useSelector((state) => state.posts);
  // const postStatus = useSelector((state) => state.posts.posts.status);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return orderedPosts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <div className="postTitle">
          <h2>{post.title}</h2>
          <div>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </div>
          <p className="postContent">{post.content}</p>
          <ReactionButtons post={post} />
          <Link to={`/posts/${post.id}`} className="buttonMuted ">
            View Post
          </Link>
          <Link to={`/editPost/${post.id}`} className="button">
            Edit Post
          </Link>
          {/* <PostAuthor userId={post.user} /> */}
        </div>
      </div>
    );
  });
};
