import "./App.css";
import React, { useState, useEffect } from "react";
const axios = require("axios").default;

function App() {
  const [response, setResponse] = useState({});
  const [word, setWord] = useState("hello");
  const [sendingRequest, setSendingRequest] = useState(false);

  async function getWord() {
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${
          word ? word : "Coffee"
        }`
      );
      setResponse({
        word: data[0].word,
        wiki: data[0].sourceUrls[0],
        meanings: data[0].meanings,
        phonetic: data[0].phonetics.filter((arr) => arr.audio !== "")[0],
      });
    } catch {
      console.log("That word doesn't exists!");
    }
  }

  useEffect(() => {
    getWord();
  }, [sendingRequest]);

  function handleSetSendingRequest() {
    setSendingRequest(!sendingRequest);
  }

  function handleSetWord(e) {
    setWord(e.target.value);
  }

  return (
    <div className="App">
      <input onChange={handleSetWord}></input>
      <button className="request" onClick={handleSetSendingRequest}>
        Request
      </button>
    </div>
  );
}

export default App;
