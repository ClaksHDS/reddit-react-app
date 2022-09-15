import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { FaSistrix } from "react-icons/fa";
import {
  setSearchQuery,
  clearSearchQuery,
  selectSearchQuery,
} from "../features/search/searchSlice";
import { Navigate, useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSubmit = (e) => {
    navigate(`=${searchQuery}`);
    dispatch(clearSearchQuery());
  };

  return (
    <Wrapper>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input'
          placeholder='Search'
          aria-label='Search posts from Reddit'
          onChange={handleChange}
        />
        <button
          type='submit'
          onClick={() => handleSubmit()}
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
