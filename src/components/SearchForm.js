import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  clearSearch,
} from "../features/searchformSlice/searchformSlice";
import { getPosts, getSearchPosts } from "../features/postsSlice/postsSlice";
/* react icons */
import { FaSistrix } from "react-icons/fa";
/* styles */
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = () => {
  const dispatch = useDispatch();

  // get the searchTerm from the searchbar
  const { searchTerm } = useSelector((store) => store.searchform);

  // target the term typed by the user
  const handleChange = (e) => {
    const userQuery = e.target.value;
    dispatch(setSearch(userQuery));
    if (userQuery.length > 0) {
      dispatch(getSearchPosts(userQuery));
    }
  };

  const handleSubmit = () => {
    dispatch(getPosts());
    dispatch(clearSearch());
  };

  return (
    <Wrapper>
      <form className='search-form'>
        <input
          type='text'
          className='form-input'
          placeholder='Search'
          aria-label='Search for a subreddit'
          value={searchTerm}
          onChange={handleChange}
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
