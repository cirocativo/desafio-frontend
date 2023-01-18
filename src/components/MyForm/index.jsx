import React from "react";
import "./styles.css";

export default function MyForm() {
  return (
    <div className="antecipationSimulationContainer">
      <h2>Simule sua Antecipação</h2>
      <form className="antecipationSimulationForm">
        <label htmlFor="sellValueInput">Informe o valor da venda *</label>
        <input id="sellValueInput"></input>
        <label htmlFor="installmentsInput">Em quantas parcelas *</label>
        <input id="installmentsInput"></input>
        <label htmlFor="mdrPercentualInput">
          Informe o percentual de MDR *
        </label>
        <input id="mdrPercentualInput"></input>
      </form>
    </div>
  );
}
