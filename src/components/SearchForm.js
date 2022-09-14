import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { FaSistrix } from "react-icons/fa";

const SearchForm = () => {
  const [querySearch, setQuerySearch] = useState("");
  const query = useSelector((store) => store.searchRedditPosts);
  const dispatch = useDispatch();

  const handleQuerySearch = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuerySearch(query));
  };

  useEffect(() => {}, [query]);

  return (
    <Wrapper>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input'
          placeholder='Search'
          aria-label='Search posts from Reddit'
          onChange={handleQuerySearch}
        />
        <button
          type='submit'
          onClick={handleSubmit}
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
