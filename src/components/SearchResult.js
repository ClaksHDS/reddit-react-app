import React from "react";
import { useSelector } from "react-redux";
import { Loading, NoMatch } from "../components";
import { Posts } from "../components";

const SearchResult = () => {
  const { isLoading, noMatch, searchTerm } = useSelector(
    (store) => store.searchform
  );

  if (isLoading) {
    return <Loading />;
  }
  if (noMatch) {
    return <NoMatch />;
  }

  return (
    <section>
      <h2>results for your search</h2>
      <Posts />
    </section>
  );
};

export default SearchResult;
