import "./App.scss";
import React, { useState, useEffect } from "react";
import SearchTab from "./components/SearchTab/SearchTab";
const axios = require("axios").default;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  //toggle dark mode
  useEffect(() => {
    document.querySelector("body").className = `${darkMode ? "dark" : "light"}`;
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <SearchTab />
    </div>
  );
}

export default App;
