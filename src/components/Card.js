import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/Cards";
import { useSelector, useDispatch } from "react-redux";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

import { Loading, Post } from "../components";

const Card = () => {
  /* if (selectPostHasError) {
    return (
      <div className='error full-page'>
        <img src={img} alt='page not found' />
        <h3>Uh oh...</h3>
        <p>Failed to load Reddit posts</p>
        <Link to='/'>back home</Link>
      </div>
    );
  } */

  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

export default Card;
