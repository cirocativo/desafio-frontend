import React from "react";
import "./styles.css";

export default function Results({ terte }) {
  return (
    <div className="resultsContainer">
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <strong>R$ {terte}</strong>
      </p>
      <p>
        Em 15 dias: <strong>R$ 1000</strong>
      </p>
      <p>
        Em 30 dias: <strong>R$ 1000</strong>
      </p>
      <p>
        Em 90 dias: <strong>R$ 1000</strong>
      </p>
    </div>
  );
}
