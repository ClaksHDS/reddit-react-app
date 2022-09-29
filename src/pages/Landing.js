import React from "react";
import { SearchForm, Navbar, Sidebar, Main } from "../components";

const Landing = () => {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <SearchForm />
      <Sidebar />
      <Main />
    </main>
  );
};

export default Landing;
