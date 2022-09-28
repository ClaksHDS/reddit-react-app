import React from "react";
import {
  Logo,
  SearchForm,
  Loading,
  Card,
  Navbar,
  Sidebar,
} from "../components";
import { useSelector } from "react-redux";

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
