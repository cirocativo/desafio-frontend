import React from "react";
import { useState, useEffect } from "react";
import MyForm from "../MyForm";
import Results from "../Results";
import "./styles.css";

export default function Calculator() {
  const [terte, setTerte] = useState(0);
  return (
    <div className="calculatorContainer">
      <MyForm setTerte={setTerte}></MyForm>
      <Results terte={terte} />
    </div>
  );
}
