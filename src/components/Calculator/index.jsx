import React from "react";
import { useState } from "react";
import MyForm from "../MyForm";
import Results from "../Results";
import "./styles.css";

export default function Calculator() {
  const [response, setResponse] = useState({});
  return (
    <div className="calculatorContainer ">
      <div className="containerLeft innerContainer">
        <MyForm setResponse={setResponse}></MyForm>
      </div>
      <div className="containerRight innerContainer">
        <Results response={response} />
      </div>
    </div>
  );
}
