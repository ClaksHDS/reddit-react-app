import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Card = () => {
  const { query, isLoading, redditPosts, hasError } = useSelector(
    (store) => store.searchRedditPosts
  );

  if (hasError) {
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

const Wrapper = styled.div`
  .card {
    box-shadow: var(--shadow-1);
    border: 1px solid var(--grey-100);
    border-radius: var(--borderRadius);
    transition: var(--transition);
    color: var(--textColor);
    width: 90vw;
    max-width: var(--maxWidth);
    margin: 2rem auto;
    padding: 1rem;
    display: grid;
    justify-content: center;
    justify-items: center;
  }
  .card:hover {
    box-shadow: var(--shadow-3);
  }
  .error {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 1.75rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;
