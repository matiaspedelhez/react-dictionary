import React, { useState } from "react";
import "./SearchTab.scss";

function SearchTab({ darkMode }) {
  const [word, setWord] = useState("Coffee");

  function handleSetWord(e) {
    setWord(e.target.value);
  }

  // !!! remove dark mode

  return (
    <form className={`SearchTab ${darkMode ? "dark" : "light"}`}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search for a word..."
        onChange={handleSetWord}
        id="search-a-word"
        required
      ></input>
      <button className="request" type="submit">
        Search{/*add onclick*/}
      </button>
    </form>
  );
}

export default SearchTab;
