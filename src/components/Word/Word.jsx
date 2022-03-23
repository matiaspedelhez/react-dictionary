import React, { useState } from "react";
import "./Word.scss";
import useSound from "use-sound";

function Word({ darkMode, filteredData, loading }) {
  let audioPath = filteredData.phonetic ? filteredData.phonetic.audio : "";
  const [play] = useSound(audioPath);
  if (loading) {
    return <div>Loading...</div>;
  }

  const difinitions = filteredData.meanings.map((element) => {
    return (
      <div>
        <h2 className="word-type">{element.partOfSpeech}</h2>
        <div className="definitions">
          {element.definitions.map((definition, index) => {
            return (
              <div className="definition">
                <p className="index">{index + 1}</p>
                <div>
                  <p className="definition-text">{definition.definition}</p>
                  <p className="definition-example">
                    {definition.example && `e.g. ${definition.example}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="Word">
        <div className="title">
          <h1>{filteredData.word}</h1>
          {filteredData.phonetic && (
            <>
              <p>{filteredData.phonetic.text}</p>
              <img
                src={require("../../images/play_sound.svg").default}
                alt="play sound"
                onClick={play}
                className="play-sound"
              />
            </>
          )}
        </div>

        <hr className={darkMode ? "dark" : "light"} />

        {difinitions}
      </div>
    </section>
  );
}

export default Word;
