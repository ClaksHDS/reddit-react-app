import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  clearSearch,
} from "../features/searchformSlice/searchformSlice";
/* react icons */
import { FaSistrix } from "react-icons/fa";
/* styles */
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchTerm, isLoading } = useSelector((store) => store.searchform);

  const handleChange = (term) => {
    dispatch(setSearch(term));
  };

  const handleSubmit = () => {
    dispatch(clearSearch());
    navigate(`/search.json?q=${searchTerm}`);
  };

  return (
    <Wrapper>
      <form className='search-form'>
        <input
          type='text'
          className='form-input'
          placeholder='Search'
          aria-label='Search posts from Reddit'
          value={searchTerm}
          onChange={({ target }) => handleChange(target.value)}
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
