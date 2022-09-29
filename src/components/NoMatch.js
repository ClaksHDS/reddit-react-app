import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const NoMatch = () => {
  return (
    <div>
      <img src={img} alt='No matching result to your research' />
      <h3>Uh oh...</h3>
      <p>We were not able to find a match to your search.</p>
      <Link to='/'>try something else</Link>
    </div>
  );
};

export default NoMatch;