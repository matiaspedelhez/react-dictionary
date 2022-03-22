import React from "react";
import "./Word.scss";

function Word({ darkMode, filteredData, loading }) {
  console.log(loading);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className={`Word`}>
        <div className="title">
          <h1>{filteredData.word}</h1>
          <p>{filteredData.phonetic.text}</p>
          {filteredData.phonetic.text && (
            <img
              src={require("../../images/play_sound.svg").default}
              alt="play sound"
            />
          )}
        </div>

        <hr className={darkMode ? "dark" : "light"} />
      </div>
    </section>
  );
}

export default Word;
