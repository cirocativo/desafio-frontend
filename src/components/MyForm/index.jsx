import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function MyForm({ setResponse }) {
  const schema = yup.object().shape({
    amount: yup.string().required("Campo obrigatório"),
    installments: yup.string().required("Campo obrigatório"),
    mdr: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmitFunction(data) {
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setResponse(response);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="antecipationSimulationContainer">
      <h2>Simule sua Antecipação</h2>
      <form
        className="antecipationSimulationForm"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <label htmlFor="sellValueInput">Informe o valor da venda *</label>
        <input id="sellValueInput" {...register("amount")}></input>
        <span className="errorMessage">{errors.amount?.message}</span>

        <label htmlFor="installmentsInput">Em quantas parcelas *</label>
        <input id="installmentsInput" {...register("installments")}></input>
        <span className="errorMessage">{errors.installments?.message}</span>

        <label htmlFor="mdrPercentualInput">
          Informe o percentual de MDR *
        </label>
        <input id="mdrPercentualInput" {...register("mdr")}></input>
        <span className="errorMessage">{errors.mdr?.message}</span>

        <input type="submit"></input>
      </form>
    </div>
  );
}
