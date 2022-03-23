import "./App.scss";
import React, { useState, useEffect } from "react";
import SearchTab from "./components/SearchTab/SearchTab";
import Word from "./components/Word/Word";
import ErrorCard from "./components/ErrorCard/ErrorCard";
const axios = require("axios").default;

// add: error dark mode styling
// !!! add: audio integration
// !!! add: errorQuotes
// ! add: dark mode switch
// SOLVED bug: sometimes, phonetic and speaker doesn't appear (i.e. "Hello"). Possibly it has to do with setFilteredData ?

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [word, setWord] = useState(""); //search-box value
  const [filteredData, setFilteredData] = useState({}); //filtered dictionary data
  const [searchSwitch, setSearchSwitch] = useState(false); //switches back and forth to trigger useEffect
  const [loading, setLoading] = useState(true); //determines if the request is loading
  const [errorQuote, setErrorQuote] = useState(""); //used to throw errors

  function getWord() {
    axios
      .get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${
          word ? word : "coffee"
        }`
      )
      .then((response) => {
        setErrorQuote("");
        setFilteredData({
          word: response.data[0].word,
          wiki: response.data[0].sourceUrls[0],
          meanings: response.data[0].meanings,
          phonetic: response.data[0].phonetics.filter(
            (arr) => arr.audio !== ""
          )[0],
        });
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response.status == 404)
          setErrorQuote("that word doesn't exists!");
        else setErrorQuote("unknown error");
      });
  }

  //fill filteredData state only with useful data
  useEffect(() => {
    getWord();
  }, [searchSwitch]);

  //toggle dark mode
  useEffect(() => {
    document.querySelector("body").className = `${darkMode ? "dark" : "light"}`;
  }, [darkMode]);

  return (
    <div className="App">
      <ErrorCard errorQuote={errorQuote} />
      <SearchTab
        setWord={setWord}
        word={word}
        searchSwitch={() => setSearchSwitch(!searchSwitch)}
      />
      <Word filteredData={filteredData} darkMode={darkMode} loading={loading} />
    </div>
  );
}

export default App;
