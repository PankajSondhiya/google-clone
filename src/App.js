import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchPage from "./searchPage";

import HomePage from "./homePage";
import { useState } from "react";
import Gmail from "./gmail";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/search/"
          element={
            <SearchPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          }
        />
        <Route
          path="/"
          element={
            <HomePage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
