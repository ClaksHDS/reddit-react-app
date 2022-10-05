import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing } from "./pages";
import { SearchResult } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
