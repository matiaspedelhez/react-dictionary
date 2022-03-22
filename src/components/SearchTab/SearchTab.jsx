import React, { useState } from "react";
import "./SearchTab.scss";

function SearchTab({ setWord, word, searchSwitch }) {
  function handleSetWord(e) {
    setWord(e.target.value);
  }

  function handleSearchButton(e) {
    e.preventDefault();
    searchSwitch();
  }

  return (
    <form className="SearchTab">
      <input
        type="text"
        autoComplete="off"
        placeholder="Search for a word..."
        value={word}
        onChange={handleSetWord}
        id="search-a-word"
        required
      ></input>
      <button className="request" type="submit" onClick={handleSearchButton}>
        Search{/*add onclick*/}
      </button>
    </form>
  );
}

export default SearchTab;
