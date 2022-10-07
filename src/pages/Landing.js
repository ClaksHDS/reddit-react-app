import React from "react";
import {
  SearchForm,
  Navbar,
  Sidebar,
  Posts,
  Subreddits,
  Footer,
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Landing;
