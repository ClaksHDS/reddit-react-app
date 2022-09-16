import React from "react";
import Markdown from "markdown-to-jsx";

export const getPostJSX = (post) => {
  if (post.postHint === "image") {
    return <img src={post.url} alt='article illustration' />;
  }
  if (post.isVideo) {
    if (!post.media) return <p>The video is unavailable</p>;
    return (
      <>
        <video id={`${post.id}v`} controls>
          <source
            src={post.media.fallback_url}
            type='video/mp4'
            data-testid={`${post.id}tv`}
          />
        </video>
      </>
    );
  }
  if (post.text) {
    return <Markdown>{post.text}</Markdown>;
  }
};
