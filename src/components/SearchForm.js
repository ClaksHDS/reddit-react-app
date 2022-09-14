import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = () => {
  return (
    <Wrapper>
      <form className='search-form'>
        <input type='text' className='form-input' />
      </form>
    </Wrapper>
  );
};

export default SearchForm;
