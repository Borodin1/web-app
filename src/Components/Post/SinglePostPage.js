import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionsButton";

export const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  if (!post) {
    return (
      <div>
        <h2>Post now found !</h2>
      </div>
    );
  }
  return (
    <div className="post">
      <div className="postTitle">
        <div className="singlePost">
          <h2>{post.title}</h2>
          <p className="postContent">{post.content}</p>
          <ReactionButtons post={post} />
          <div className="linkState">
            <Link to={`/editPost/${post.id}`} className="button">
              Edit Post
            </Link>
            <Link to="/" className="button">
              Back Home
            </Link>
          </div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
      </div>
    </div>
  );
};
