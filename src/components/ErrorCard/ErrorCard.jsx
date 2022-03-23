import React from "react";
import "./ErrorCard.scss";

function ErrorCard({ errorQuote }) {
  const errorStyles = {
    bottom: errorQuote ? "0" : "-6rem",
  };
  return (
    <div style={errorStyles} className="ErrorCard">
      <p>Error: {errorQuote}</p>
    </div>
  );
}

export default ErrorCard;
