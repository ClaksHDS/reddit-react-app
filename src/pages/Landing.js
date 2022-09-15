import React from "react";
import { Logo, SearchForm, Loading, Card } from "../components";
import { useSelector } from "react-redux";

const Landing = () => {
  const { query, isLoading, redditPosts } = useSelector(
    (store) => store.searchRedditPosts
  );

  return (
    <main>
      <nav>
        <Logo />
      </nav>
      <SearchForm />
      {isLoading ? <Loading /> : <Card />}
    </main>
  );
};

export default Landing;
