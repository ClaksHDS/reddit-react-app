import React from "react";
import {
  SearchForm,
  Navbar,
  Sidebar,
  Posts,
  Subreddits,
  ScrollButton,
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
        <ScrollButton />

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
