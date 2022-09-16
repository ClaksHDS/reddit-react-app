import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/Cards";
import { useSelector, useDispatch } from "react-redux";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
import {
  selectPostIsLoading,
  selectPostHasError,
  getPosts,
  selectPosts,
} from "../features/card/cardSlice";
import { Loading, Post } from "../components";

const Card = () => {
  const dispatch = useDispatch();
  const postsArray = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getPosts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  let values = [];

  if (selectPostIsLoading) {
    return <Loading />;
  }

  if (selectPostHasError) {
    return (
      <div className='error full-page'>
        <img src={img} alt='page not found' />
        <h3>Uh oh...</h3>
        <p>Failed to load Reddit posts</p>
        <Link to='/'>back home</Link>
      </div>
    );
  }

  return (
    <Wrapper>
      <div>
        {postsArray.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Card;
