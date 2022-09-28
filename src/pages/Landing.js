import React from "react";
import { Logo, SearchForm, Loading, Card, Navbar } from "../components";
import { useSelector } from "react-redux";

const Landing = () => {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <SearchForm />
    </main>
  );
};

export default Landing;
