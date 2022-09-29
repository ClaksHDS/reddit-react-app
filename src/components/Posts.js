import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Loading, NoMatch, Post } from "../components";
import { getPosts } from "../features/postsSlice/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, hasError } = useSelector((store) => store.posts);

  if (isLoading) {
    return <Loading />;
  }
  if (hasError) {
    return (
      <div className='error full-page'>
        <h3>Uh oh...</h3>
        <p>Something went wrong</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return <NoMatch />;
  }

  return <section></section>;
};

export default Posts;
