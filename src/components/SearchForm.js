import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { FaSistrix } from "react-icons/fa";

import { Navigate, useNavigate } from "react-router-dom";

const SearchForm = () => {
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className='search-form' onSubmit={console.log("form submitted")}>
        <input
          type='text'
          className='form-input'
          placeholder='Search'
          aria-label='Search posts from Reddit'
          onChange={handleChange}
        />
        <button
          type='submit'
          onClick={() => console.log("submit")}
          aria-label='search'
          className='btn-search'
        >
          <FaSistrix />
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
