import React from "react";
import {
  SearchForm,
  Navbar,
  Sidebar,
  Posts,
  Subreddits,
  SearchResult,
} from "../components";

const Landing = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <SearchForm />
        <Sidebar />
        <SearchResult />
      </main>
      <aside className='subreddits-fullpage'>
        <Subreddits />
      </aside>
    </>
  );
};

export default Landing;
