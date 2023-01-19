import React from "react";
import "./styles.css";

export default function Results({ response }) {
  return (
    <div className="resultsContainer">
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <strong>R$ {response[1]},00</strong>
      </p>
      <p>
        Em 15 dias: <strong>R$ {response[15]},00</strong>
      </p>
      <p>
        Em 30 dias: <strong>R$ {response[30]},00</strong>
      </p>
      <p>
        Em 90 dias: <strong>R$ {response[90]},00</strong>
      </p>
    </div>
  );
}
