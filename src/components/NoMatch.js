import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/images/not-found.svg";

const NoMatch = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='No matching result to your research' />
        <h3>Uh oh...</h3>
        <p>We were not able to find a match to your search.</p>
        <Link to='/' className='link'>
          try something else
        </Link>
      </div>
    </Wrapper>
  );
};

export default NoMatch;

const Wrapper = styled.div`
  width: 90vw;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 3rem 1rem;
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 1.75rem;
  }
`;
