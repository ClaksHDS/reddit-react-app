import React from "react";
import { SearchForm, Navbar, Sidebar } from "../components";

const Landing = () => {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <SearchForm />
      <Sidebar />
    </main>
  );
};

export default Landing;
