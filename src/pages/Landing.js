import React from "react";
import { SearchForm, Navbar, Sidebar, Main, Posts } from "../components";

const Landing = () => {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <SearchForm />
      <Sidebar />
      <Main />
      <Posts />
    </main>
  );
};

export default Landing;
