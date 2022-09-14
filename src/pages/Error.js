import img from "../assets/images/error.svg";
import { Link } from "react-router-dom";
import React from "react";

const Error = () => {
  return (
    <div>
      <img src={img} alt='page not found' />
      <h3>uh oh...</h3>
      <p>we can't find the page you're looking for.</p>
      <Link to='/'>back home</Link>
    </div>
  );
};

export default Error;
