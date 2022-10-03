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
      <header>
        <SearchForm />
      </header>
      <main>
        <Sidebar />
        <Posts />
        <aside className='subreddits-fullpage'>
          <Subreddits />
        </aside>
      </main>
    </>
  );
};

export default Landing;
