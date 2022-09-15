import React from "react";
import Wrapper from "../assets/wrappers/Cards";
import { useSelector, useDispatch } from "react-redux";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
import {
  selectPostIsLoading,
  selectPostHasError,
} from "../features/card/cardSlice";
import { Loading } from "../components";

const Card = () => {
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  if (selectPostIsLoading) {
    return <Loading />;
  }

  if (selectPostHasError) {
    return (
      <div className='error'>
        <img src={img} alt='page not found' />
        <h3>Uh oh...</h3>
        <p>Failed to load Reddit posts</p>
        <Link to='/'>back home</Link>
      </div>
    );
  }
  return (
    <Wrapper>
      <div className='card'>
        <h3>article</h3>
      </div>
    </Wrapper>
  );
};

export default Card;
