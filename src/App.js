import "./App.scss";
import React, { useState, useEffect } from "react";
import SearchTab from "./components/SearchTab/SearchTab";
import Word from "./components/Word/Word";
const axios = require("axios").default;

// !!! bug: sometimes, phonetic and speaker doesn't appear (i.e. "Hello"). Possibly it has to do with setFilteredData ?

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [word, setWord] = useState(""); //search-box value
  const [filteredData, setFilteredData] = useState({}); //filtered dictionary data
  const [searchSwitch, setSearchSwitch] = useState(false); //switches back and forth to trigger useEffect
  const [loading, setLoading] = useState(true);

  function getWord() {
    try {
      axios
        .get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${
            word ? word : "House"
          }`
        )
        .then((response) => {
          setFilteredData({
            word: response.data[0].word,
            wiki: response.data[0].sourceUrls[0],
            meanings: response.data[0].meanings,
            phonetic: response.data[0].phonetics.filter(
              (arr) => arr.audio !== ""
            )[0],
          });
          setLoading(false);
        });
    } catch {
      console.log("That word doesn't exists!");
    }
  }

  //fill filteredData state only with useful data
  useEffect(() => {
    getWord();
    console.log(filteredData);
  }, [searchSwitch]);

  //toggle dark mode
  useEffect(() => {
    document.querySelector("body").className = `${darkMode ? "dark" : "light"}`;
  }, [darkMode]);

  console.log(filteredData);

  return (
    <div className="App">
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
