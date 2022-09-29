import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResult from "./SearchResult";
/* styles */

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/search' element={<SearchResult />} />
      </Routes>
    </main>
  );
};

export default Main;
