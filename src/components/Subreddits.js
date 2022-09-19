import React from "react";
import Wrapper from "../assets/wrappers/Sidebar";
import { FcReddit } from "react-icons/fc";

const Subreddits = () => {
  return (
    <Wrapper>
      <article className='content'>
        <FcReddit className='icon' />
        <button className='btn btn-hipster'>
          {/* map over subreddits and display a button for each subreddits*/}
        </button>
      </article>
    </Wrapper>
  );
};

export default Subreddits;
