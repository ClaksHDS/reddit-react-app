import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPostJSX } from "../utils/getPostInJSX";

const Post = ({ post }) => {
  // to display video when a post contained one

  // turn post as JSX
  const postMedia = getPostJSX(post);

  return (
    <article>
      <div>
        <p>{post.subreddit}</p>
        <h2>{post.title}</h2>
        {postMedia}
        <div>
          <h4>
            <span>Author:</span>
            {post.author}
          </h4>
        </div>
      </div>
    </article>
  );
};

export default Post;
